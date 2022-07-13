var ms = 0, s = 0, m = 0;
var timer;

var stopwatchEL = document.querySelector('.stopwatch');

function start() {

    if (!timer) {
        timer = setInterval(run, 10)
    }
}

function run() {
    stopwatchEL.textContent = getTimer();
    ms++;
    updateTimer();

    if (ms == 100) {
        ms = 00;
        s++
    }

    if (s == 60) {
        s = 0;
        m++;
    }



}

function pause() {
    stopTimer();
}

function stop() {
    stopTimer();
    m = 0;
    ms = 0;
    s = 0;
    stopwatchEL.textContent = getTimer();

}

function getTimer() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function restart() {
    stop();
    start();
}


function getVal() {
    var inputVal = document.getElementById('stopwatch').value;
}

function updateTimer() {

    if (m == 0, ms == 0, s == inputVal) {

        $('#ado').get(0).play();
        pause();

    }
}

