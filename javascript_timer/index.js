var stopwatch = document.getElementById("stopwatch");
var Start = document.getElementById("start");
var Stop = document.getElementById("stop");
var Reset = document.getElementById("reset");
var hour = 0;
var min = 0;
var sec = 0;
var t;

function tick(){
    sec++;
    if(sec >= 60){
        sec = 0;
        min++;
        if(min>=60){
            min = 0;
            hour++;
        }
    }
}

function add(){
    tick();
    stopwatch.textContent = (hour > 9 ? hour : "0" + hour) + ":" +
                            (min > 9 ? min : "0" + min) + ":" +
                            (sec > 9 ? sec : "0" + sec);
    timer();
}

function timer(){
    t = setTimeout(add, 1000);
}

function stop_timer(){
    clearTimeout(t);
}

function reset_timer(){
    stopwatch.textContent = "00:00:00";
    hour = 0;
    min = 0;
    sec = 0;
}

Start.onclick = timer;
Stop.onclick = stop_timer;
Reset.onclick = reset_timer;
