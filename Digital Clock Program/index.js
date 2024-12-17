const clk = document.getElementById("timer");

function clock() {
    const timer = new Date()
    let hours = String(timer.getHours());
    let minutes = String(timer.getMinutes());
    let seconds = String(timer.getSeconds());

    const time = hours < 12 ?
        `${hours !== '0' ? hours.padStart(2, 0) : 12}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)} AM` :
        `${hours !== '12' ? (Number(hours) - 12).toString().padStart(2, 0) : 12}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)} PM`

    clk.textContent = time

}

clock();
setInterval(clock, 1000)