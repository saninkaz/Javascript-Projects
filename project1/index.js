console.log("hey")

document.getElementById("h1").textContent="Introduction"
document.getElementById("p1").textContent="Hey this is my first website"


let username;
let password;

document.getElementById("b1").onclick= function(){

    username=document.getElementById("input1").value
    password=document.getElementById("input2").value

    document.getElementById("output").innerHTML=`You have succesfully logged in <br> Username: ${username} <br> Password: ${password}`


}