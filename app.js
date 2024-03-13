console.log("WELCOME TO THE GAME ")

let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let messageContainer = document.querySelector('.msg-container');
let message = document.querySelector('#msg');
// let newBtn = document.querySelector('.new-btn');

let turn0 = true; //For player O AND X
let count = 0; // check for draw 

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box was clicked")
        if (turn0) {
            box.innerText = "O";
            document.querySelector("body").style.backgroundColor="#00ffff";
           
            turn0 = false;
        } else {
            box.innerText = 'X';
           document.querySelector("body").style.backgroundColor="#D2D68D";
            turn0 = true;
        }
        box.disabled = true;
        count++;


        let isWinner = checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }
    });
});

const resetGame = ()=>{
    turn0=true;
    count=0;
    enableBoxes();
    //when u enable the boxes congratulation message should not be shown it should be hidden so
    messageContainer.classList.add('hide');
    


}

//When 1 element wins other boxes should be disabled.
const disableboxes = ()=>{
    for (const box of boxes) {
        box.disabled=true;
        
    }
}

//Enable boxes
const enableBoxes = ()=>{
    for (const box of boxes) {
        box.disabled=false;
        // we need to remove X and O from all the boxes
        box.innerText="";
        
    }
}

//After winning message should be displayed using innerText
const showWinner = (sanki)=>{
    message.innerText=`Congratulations!!!Winner Is ${sanki}`;
    

    messageContainer.classList.remove("hide");
    disableboxes();
}

//To check how the winner is won when all boxes have same element.
const checkWinner = () => {
    for (const pattern of winPattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 == position2 && position2 == position3) {

                console.log('WINNER OF THE GAME IS ' , position1)
                showWinner(position1);
            }
        }

    };

}
const gameDraw = ()=>{
    message.innerText="Game Tied!!!";
    messageContainer.classList.remove("hide")
}

//First function resetGame will trigger now
// newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);








