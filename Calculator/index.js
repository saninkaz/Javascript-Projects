const display=document.getElementById("display");
er=false;

function Display(x){
    if(!er)
    {
    display.value +=x
    }
    else{
        clearDisplay();
        display.value =x;
        er=false;
    }
}

function clearDisplay(){
    display.value=''
}

function Evaluate(){
    try {
        display.value=eval(display.value);
    } catch (error) {
        display.value='Error Occured'
        er=true
    }
}