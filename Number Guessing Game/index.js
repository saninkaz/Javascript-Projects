const b1 = document.getElementById("button")
const i1 = document.getElementById("input")
const r = document.getElementById("result")

const min = 1;
const max = 100;

function generaternum() {

    let rnum = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnum
}

let rnum=generaternum()
console.log(rnum);
let attempts=0;

b1.onclick = function () {
    let num = Number(i1.value)

    if (num < min || num > max || isNaN(num))
    {
        r.textContent="Enter a valid number"
    }

    else{
        if(num==rnum)
        {
            r.textContent=`You guessed correctly, Number of attempts = ${attempts}`
            attempts=0;
            rnum=generaternum()
        }
        else if(num<rnum)
        {
            r.textContent=""
            setTimeout(() => {
                r.textContent="TOO LOW"
            },100);
            attempts++
        }
        else if(num>rnum)
        {
            r.textContent=""
            setTimeout(() => {
                r.textContent="TOO HIGH"
            },100);
            attempts++;
        }
    }
}