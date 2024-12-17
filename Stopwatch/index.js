const timer = document.getElementById("timer")
let id;
let st = 0;
let running = false;


function start() {

    if (!running) {
        timeId = setInterval(() => {
            st++;
            let s = st / 100
            let m = s / 60;
            let h = m / 60;
            let milli = (st % 100).toString();
            let seconds = (Math.floor(s) % 60).toString();
            let minutes = ((Math.floor(m)) % 60).toString();
            let hours = (Math.floor(h)).toString();
            timer.textContent = `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}:${milli.padStart(2, 0)}`
        }, 10);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timeId);
        running = false;
    }
}

function reset() {
    clearInterval(timeId);
    st=0;
    running=false;
    timer.textContent=`00:00:00:00`;
}