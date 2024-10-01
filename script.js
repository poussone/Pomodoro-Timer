//------------------GLOBAL VARIABLE------------------//

//main displayed time
const main_display_min = document.getElementById('timer_min');
const main_display_sec = document.getElementById('timer_sec');

//secondary displayed time
const secondary_display_min = document.getElementById('pause_timer_min');

//which mode is the timer on
work = true;

//should the timer tick down
timer_running = false;

//working time
work_min = 25;
work_sec = 0;
//pause time
pause_min = 5;
pause_sec = 0;


//------------------FUNCTION DEFINITION------------------//

//Went called change the page style between work and pause mode depending on the value of 'work' variable
function switch_mode() {
    if (work) {
        //switch to work
        document.getElementById('page').style.backgroundColor = "rgb(178,40,40)";
        document.getElementById('circle_1').style.backgroundColor = "rgb(178, 70, 70)";
        document.getElementById('circle_2').style.backgroundColor = "rgb(178, 50, 50)";
    } else {
        //swith to pause
        document.getElementById('page').style.backgroundColor = "rgb(17, 163, 221)";
        document.getElementById('circle_1').style.backgroundColor = "rgb(110, 193, 226)";
        document.getElementById('circle_2').style.backgroundColor = "rgb(79, 184, 226)";
    }
}

//Update the time from the main timer to the values given
//Format the time text if it is only composed of one digit
function set_main_display_time(min, sec) {
    if (min < 10) {
        main_display_min.textContent = '0' + min;
    } else {
        main_display_min.textContent = min;
    }
    if (sec < 10) {
        main_display_sec.textContent = '0' + sec;
    } else {
        main_display_sec.textContent = sec;
    }
}

//Add the time(can be negative) given to the timer choosed("work"/"pause")
function change_time(time_to_add, timer) {
    if (!timer_running) {
        switch (timer) {
            case "work":
                if (time_to_add >= 0 || work_min > 0) {
                    work_min = +work_min + +time_to_add;
                    set_main_display_time(work_min, work_sec);
                }
                break;

            case "pause":
                if (time_to_add >= 0 || pause_min > 0) {
                    pause_min = +pause_min + +time_to_add;
                    if (pause_min < 10) {
                        secondary_display_min.textContent = '0' + pause_min;
                    } else {
                        secondary_display_min.textContent = pause_min;
                    }
                }
                break;
            default:
        }

    }
}


//------------------BUTTON EVENT LISTENER------------------//

//Arrows Listeners
//increment work timer
document.getElementById('up_arrow_work').addEventListener("click", function () { change_time(5, "work"); });

//decrement work timer
document.getElementById('down_arrow_work').addEventListener("click", function () { change_time(-5, "work"); });

//increment pause timer
document.getElementById('up_arrow_pause').addEventListener("click", function () { change_time(5, "pause"); });

//decrement pause timer
document.getElementById('down_arrow_pause').addEventListener("click", function () { change_time(-5, "pause"); });

//play/reset button listener
document.getElementById('play_button').addEventListener("click", function () {
    if (timer_running) {
        //reset
        document.getElementById('play_button_icon').className = 'fa-solid fa-play fa-5x';
        document.getElementById('up_arrow_work').style.visibility = "visible";
        document.getElementById('down_arrow_work').style.visibility = "visible";
        document.getElementById('pause_timer').style.visibility = "visible";
        set_main_display_time(work_min, work_sec);
        work = true;
        switch_mode();
    } else {
        //play
        document.getElementById('play_button_icon').className = 'fa-solid fa-rotate-right fa-5x';
        document.getElementById('up_arrow_work').style.visibility = "hidden";
        document.getElementById('down_arrow_work').style.visibility = "hidden";
        document.getElementById('pause_timer').style.visibility = "hidden";
    }
    timer_running = !timer_running;
});


//------------------MAIN------------------//

//each seconde try to update the timer
window.onload = function countdown() {
    timer = setInterval(function () {
        if (timer_running) {
            min = main_display_min.textContent;
            sec = main_display_sec.textContent;
            if (min == 0 && sec == 0) {
                //timer reach 0 -> switch mode
                if (work) {
                    set_main_display_time(pause_min, pause_sec);
                } else {
                    set_main_display_time(work_min, work_sec);
                }
                work = !work;
                switch_mode();
            } else {
                //keep ticking down
                if (sec == 0) {
                    set_main_display_time(+min - 1, 59);
                } else {
                    set_main_display_time(+min, +sec - 1)
                }
            }
        }
    }
        , 1000);
}
