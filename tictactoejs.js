let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbutton");
let newgameBtn=document.querySelector("#newbutton");
let msgcontainer=document.querySelector(".msgcontain");
let msg=document.querySelector("#msg");
let c=0;
let turn=true;
const arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[3,4,5],[6,7,8]];



function resetGame(){
    c=0;
    turn = true;
    enableButtons();
    msgcontainer.classList.add("hide");
}

boxes.forEach(box => {
        box.addEventListener("click",() => {

            if(turn)
                {
                    box.innerText="O";
                    turn=false;
                }
            else
            {
                box.innerText="X";
                box.style.color="black";
                turn=true;
            }
            c++;
        box.disabled=true;
        checkWin();
        });
});

function checkWin(){
    let k=0;
    for(let pattern of arr){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!="")
            {
                if(pos1Val==pos2Val&&pos2Val==pos3Val)
                    {
                        k=1;
                        console.log(`Winner is ${pos1Val}`);
                        showWinner(pos1Val);
                    }
            }
    }
    if(k==0&&c==9)
        showDraw();
}

function showWinner(winner){
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableButtons();
}

function showDraw(){
    msg.innerText=`It is a Draw`;
    msgcontainer.classList.remove("hide");
    // disableButtons();
}

function disableButtons(){
    for(let box of boxes)
        {
            box.disabled=true;
        }
}

function enableButtons(){
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}

newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);