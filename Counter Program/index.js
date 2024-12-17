

//DECREMENT

document.getElementById("b1").onclick= function(){

    let value=document.getElementById("h2").textContent
    console.log(value);
    value=Number(value);
    value--;
    document.getElementById("h2").textContent=`${value}`;
}

//RESET

document.getElementById("b2").onclick= function(){

    document.getElementById("h2").textContent="0";
}

//INCREMENT

document.getElementById("b3").onclick= function(){

    let value=document.getElementById("h2").textContent
    value=Number(value);
    value++;
    document.getElementById("h2").textContent=value;
}