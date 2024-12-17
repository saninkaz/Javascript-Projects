const num=document.getElementById("input")
const result=document.getElementById("result")



function rollDice(){
    let nOfDice=Number(num.value);
    let images=[]

    for(let i=1;i<=nOfDice;i++){
        let rnum=Math.floor((Math.random()*6))+1;

        images.push(`<img src="images_dice/${rnum}.png">`)   
    }

    result.innerHTML=images.join(' ');
}