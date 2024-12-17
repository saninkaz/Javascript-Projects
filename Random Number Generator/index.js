
const b1=document.getElementById("b1");
const l1=document.getElementById("l1");
const min=1;
const max=6;

let rnum;

b1.onclick=function(){
    rnum=Math.floor(Math.random()*max)+min;

    l1.textContent=`${rnum}`;
}