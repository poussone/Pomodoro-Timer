//displayed time
const display_min = document.getElementById('timer_min');
const display_sec = document.getElementById('timer_sec');

//work mode
working = true;

//work timer
work_min = 25;
work_sec = 0;
//pause timer
pause_min = 5;
pause_sec = 0;

set_display_time(work_min, work_sec);




//ever ticking time if timer_running TRUE
timer_running = false;
window.onload = function countdown() {
    timer = setInterval(function () {
        if (timer_running) {
            min = display_min.textContent;
            sec = display_sec.textContent;
            if (min == 0 && sec == 0) {
                if (working) {
                    set_display_time(pause_min, pause_sec);
                } else {
                    set_display_time(work_min, work_sec);
                }
                working = !working;
                switch_mode();
            } else {
                if (sec == 0) {
                    set_display_time(+min - 1, 59);
                } else {
                    set_display_time(+min, +sec - 1)
                }
            }
        }
    }
        , 1000);
}


function switch_mode() {
    if (working) {
        document.getElementById('page').style.backgroundColor = "rgb(178,40,40)";
        document.getElementById('circle_1').style.backgroundColor = "rgb(178, 70, 70)";
        document.getElementById('circle_2').style.backgroundColor = "rgb(178, 50, 50)";
    } else {
        document.getElementById('page').style.backgroundColor = "rgb(17, 163, 221)";
        document.getElementById('circle_1').style.backgroundColor = "rgb(110, 193, 226)";
        document.getElementById('circle_2').style.backgroundColor = "rgb(79, 184, 226)";
    }
}


//Button click event
document.getElementById('play_button').addEventListener("click", function () {
    if (timer_running) {
        //stop-reset
        document.getElementById('play_button_icon').className = 'fa-solid fa-play fa-5x';
        document.getElementById('up_arrow').style.visibility = "visible";
        document.getElementById('down_arrow').style.visibility = "visible";
        set_display_time(work_min, work_sec);
        working = true;
        switch_mode();
    } else {
        //play
        document.getElementById('play_button_icon').className = 'fa-solid fa-rotate-right fa-5x';
        document.getElementById('up_arrow').style.visibility = "hidden";
        document.getElementById('down_arrow').style.visibility = "hidden";
    }
    timer_running = !timer_running;
});
document.getElementById('up_arrow').addEventListener("click", function () {
    change_time(5, "work");
});
document.getElementById('down_arrow').addEventListener("click", function () {
    change_time(-5, "work")
});

function change_time(time_change, timer) {
    if (!timer_running) {
        switch (timer) {
            case "work":
                if (time_change >= 0 || work_min > 0) {
                    work_min = +work_min + +time_change;
                    set_display_time(work_min, work_sec);
                }
                break;

            case "pause":

                break;
            default:
        }

    }
}
function set_display_time(min, sec) {
    if (min < 10) {
        display_min.textContent = '0' + min;
    } else {
        display_min.textContent = min;
    }
    if (sec < 10) {
        display_sec.textContent = '0' + sec;
    } else {
        display_sec.textContent = sec;
    }
}