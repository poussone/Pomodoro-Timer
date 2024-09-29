//displayed time
const display_min = document.getElementById('timer_min');
const display_sec = document.getElementById('timer_sec');

//work mode
working = true;

//work timer
work_min = display_min.textContent;
work_sec = display_sec.textContent;
//pause timer
pause_min = 5;
pause_sec = 0;




//ever ticking time if timer_running TRUE
timer_running = false;
window.onload = function countdown() {
    timer = setInterval(function () {
        if (timer_running) {
            min = display_min.textContent;
            sec = display_sec.textContent;
            if (min == 0 && sec == 0) {
                if (working) {
                    display_min.textContent = pause_min;
                    display_sec.textContent = pause_sec;
                } else {
                    display_min.textContent = work_min;
                    display_sec.textContent = work_sec;

                }
                working = !working;
                switch_mode();
            } else {
                if (sec == 0) {
                    if (min < 11) {
                        display_min.textContent = '0' + (min - 1);
                    } else {
                        display_min.textContent = min - 1;
                    }

                    display_sec.textContent = 59;
                } else {
                    if (sec < 11) {
                        display_sec.textContent = '0' + (sec - 1);
                    } else {
                        display_sec.textContent = sec - 1;
                    }

                }
            }
        }
    }, 1000);
}
/*
function switch_mode(){
    if(working){
        document.getElementsByTagName('body')[0].style.backgroundColor("rgb(135, 206, 235");
    }else{

    }
}
    */


//Button click event
document.getElementById('play_button').addEventListener("click", function () {
    if (timer_running) {
        //stop-reset
        document.getElementById('play_button_icon').className = 'fa-solid fa-play';
        document.getElementById('up_arrow').style.visibility = "visible";
        document.getElementById('down_arrow').style.visibility = "visible";
        display_min.textContent = work_min;
        display_sec.textContent = work_sec;
        working = true
    } else {
        //play
        document.getElementById('play_button_icon').className = 'fa-solid fa-rotate-right';
        document.getElementById('up_arrow').style.visibility = "hidden";
        document.getElementById('down_arrow').style.visibility = "hidden";
    }
    timer_running = !timer_running
});

document.getElementById('up_arrow').addEventListener("click", function () {
    console.log("up");
    change_time(5, "work");
});

document.getElementById('down_arrow').addEventListener("click", function () {
    console.log("down");
    change_time(-5, "work")
});

function change_time(time_change, timer) {
    if (!timer_running) {
        switch (timer) {
            case "work":
                if (time_change >= 0 || work_min > 0) {
                    work_min = +work_min + +time_change ;
                    if(work_min < 10){
                        display_min.textContent = '0' + work_min;
                    }else{
                        display_min.textContent = work_min;
                    }
                }
            break;

                case "pause":

                break;

            default:
        }

    }
}