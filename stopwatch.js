let sec = 0, displaySec = 0;
let min = 0, displayMin = 0;
let hrs = 0, displayHrs = 0;

document.getElementById("start").disabled = false;
document.getElementById("pause").disabled = true;
document.getElementById("stop").disabled = true;

let status1 = "started";
let interval1 = null;

function stopwatch(){

    sec++;
    if(sec/60 === 1)
    {
        sec = 0;
        min++;
        if(min/60 === 1)
        {
            min = 0;
            hrs++;
        }
    }

    if(sec<10)
    {
        displaySec = "0"+ sec.toString();
    }
    else{
        displaySec = sec;
    }

     if(min<10)
    {
        displayMin = "0"+ min.toString();
    }
    else{
        displayMin = min;
    }

     if(hrs<10)
    {
        displayHrs = "0"+ hrs.toString();
    }
    else{
        displayHrs = hrs;
    }

    document.getElementById("display").innerHTML = displayHrs+":"+displayMin+":"+displaySec;

}

function start(){
    
    interval1 = window.setInterval(stopwatch,1000);
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("stop").disabled = false;
}

function pause()
{
    if(status1 == "stopped")
    {
        interval1 = window.setInterval(stopwatch,1000);
        document.getElementById("pause").innerHTML = "pause";
        status1 = "started";
    }
    else{
        window.clearInterval(interval1);
        document.getElementById("pause").innerHTML = "continue";
        status1 = "stopped";
    }
}

function stop(){
    sec = 0;
    min = 0;
    hrs = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    //document.getElementById("pause").innerHTML = "pause";
    pause();
    document.getElementById("pause").disabled = true;
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    location.reload();

}