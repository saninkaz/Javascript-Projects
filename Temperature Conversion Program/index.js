
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result")
const button=document.getElementById("button")
let answer;

button.onclick=function convert(){
    const input=Number(document.getElementById("input").value)
    if(toFahrenheit.checked){
        answer=(input *(9/5))+32;
        result.textContent=`${answer.toFixed(2)}°F`;
    }
    else if(toCelsius.checked){
        answer=(input-32)*(5/9);
        result.textContent=`${answer.toFixed(2)}°C`;
    }
    else{
        result.textContent=`Please Select A Unit`;
    }

}