let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;
const winnerCase = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [1,4,7],
    [6,7,8]
];
const restartGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("clicked button");
        if(turn0 === true){
            box.innerHTML="O";
            turn0 = false;
        } 
        else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner) =>{
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
   disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winnerCase ){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val !="" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
               // console.log("winner",pos1val);
                showwinner(pos1val);
                return true;
            }
        }
    }
};

newGame.addEventListener("click",restartGame);
restart.addEventListener("click",restartGame);