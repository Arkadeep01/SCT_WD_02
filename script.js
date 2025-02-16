let timeUnits = {centiseconds:0, seconds:0, minutes:0, hours:0};
let displayTime = document.getElementById("display-time")
let timer = null;
function stopwatch(){
    timeUnits.centiseconds++;
    if(timeUnits.centiseconds === 100){
        timeUnits.centiseconds = 0;
        timeUnits.seconds++;
    }
    if(timeUnits.seconds === 60){
        timeUnits.seconds = 0;
        timeUnits.minutes++;
    }
    if(timeUnits.minutes === 60){
        timeUnits.minutes = 0;
        timeUnits.hours++;
    }
    displayTime.innerText = formatTime();
}

function formatTime() {
    return `${String(timeUnits.hours).padStart(2, "0")}:` +
           `${String(timeUnits.minutes).padStart(2, "0")}:` +
           `${String(timeUnits.seconds).padStart(2, "0")}:` +
           `${String(timeUnits.centiseconds).padStart(2, "0")}`;
}
function watchstart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
}
function watchstop(){
    clearInterval(timer);
}
function watchreset(){
    watchstop();
    timeUnits = {centiseconds:0, seconds:0, minutes:0, hours:0};
    displayTime.innerText = formatTime();
}