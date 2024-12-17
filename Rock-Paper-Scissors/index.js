const score1=document.getElementById("scoreboard1");
const score2=document.getElementById("scoreboard2");
const computer=document.getElementById("choice")
const btns=document.querySelectorAll(".emoji")
const rst=document.getElementById("result");
let s1=0;
let s2=0;
let result='';

const arr=["rock","paper","scissors"]

btns.forEach((button)=>{
    button.addEventListener("mouseover",event=>{
        event.target.style.backgroundColor="hsl(163, 60%, 25%,0.8)";
    })

    button.addEventListener("mouseout",event=>{
        event.target.style.backgroundColor="hsl(163, 60%, 25%)";
    })

    button.addEventListener("click",event=>{
        const rnum=Math.floor(Math.random()*3);
        const compchoice=arr[rnum];
        const pchoice=button.id;

        console.log(compchoice);
        console.log(pchoice)

        if(pchoice==compchoice){
            result="ITS A DRAW";
        }
        else{
            if(pchoice=="rock"){
                result = compchoice=="scissors" ? "YOU WON!" : "YOU LOSE!"
            }
            else if(pchoice=="paper"){
                result = compchoice=="rock" ? "YOU WON!" : "YOU LOSE!"
            }
            else if(pchoice=="scissors"){
                result = compchoice=="paper" ? "YOU WON!" : "YOU LOSE!"
            }
            if(result=="YOU WON!"){
                s1++;
            }
            else{
                s2++;
            }
        }

        rst.textContent=result;
        computer.textContent=`Computer : ${compchoice}`
        score1.textContent=`Your Score : ${s1}`;
        score2.textContent=`Computer Score :  ${s2}`

        rst.classList.remove("green","red");

        if(result==="YOU WON!"){
            console.log("hey")
            rst.classList="green";
        }
        else if(result==="YOU LOSE!"){
            rst.classList="red";
        }
        

    })
})