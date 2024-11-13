let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msgp = document.querySelector("#msg-p");
let draw = 0;
let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText = "X";
            turnO = false;
            box.classList.add("box-x");
            box.classList.remove("box-o");
        }
        else{
            box.innerText = "O";
            turnO = true;
            box.classList.add("box-o");
            box.classList.remove("box-x");
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(pos1Val, "Won");
                disableAll();
                showWinner(pos1Val);
                return;
            }
        }
    }
    draw++;
    console.log(draw);
    if(draw == 9) showDraw();
}

const disableAll = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

resetBtn.addEventListener("click", () => {
    draw = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        msgContainer.classList.add("hide");
        turnO = true;
    });
});

const showWinner = (winner) => {

    // to add color to the winner

    // if(winner === "X"){
    //     msgp.innerText = `${winner}`;
    //     msgp.classList.add("box-x");
    //     msgp.classList.remove("box-o");
    // }
    // if(winner === "O"){
    //     msgp.innerText = `${winner}`;
    //     msgp.classList.add("box-o");
    //     msgp.classList.remove("box-x");
    // }

    msgp.innerText = `${winner} Wins!`;
    msgContainer.classList.remove("hide");
};

const showDraw = () => {
    msgp.innerText = "It's a Draw";
    msgContainer.classList.remove("hide");
}
