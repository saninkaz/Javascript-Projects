const input = document.getElementById("inputbox");
const form = document.getElementById("weatherform");
const box = document.getElementById("box1");
const apikey = "e393ac76f5270595d2cac8fc70e3a866"

form.addEventListener("submit", async event => {
    event.preventDefault();

    const city = input.value;

    if (city) {
        console.log("done")
        document.getElementById("error").style.display = "none"

        try {

            const wdata = await fetchdata(city);
            displayInfo(wdata);

        } catch (error) {
            console.log(error);
        }


        box.style.display = "block"
    }

    else {
        displayError()
    }

})

async function fetchdata(city) {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${apikey}`
    response =await fetch(url);
    wdata= await response.json();
    return wdata
}

function displayInfo(data) {
    console.log(data);
    document.getElementById("city").textContent=`${data.name}`
    let temp=data.main.temp;
    temp=temp-273.15;
    document.getElementById("temperature").textContent=`${temp.toFixed(1)}°C`
    document.getElementById("humidity").textContent=`Humidity: ${data.main.humidity}`;
    let sky=data.weather[0].description;
    let skyimage=data.weather[0].main
    console.log(sky)
    document.getElementById("sky").textContent=sky;
    switch(skyimage.toLowerCase()){
        case "clouds":
            document.querySelector('img').src="cloud.png";
            break;
        case "clear":
            document.querySelector('img').src="sun.jpg"
            break;
        default :
            document.querySelector('img').src=""
        
        
    }


}

function displayError() {
    box.style.display = "none"
    document.getElementById("error").style.display = "block"
}