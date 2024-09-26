//displayed time
const display_min = document.getElementById('timer_min');
const display_sec = document.getElementById('timer_sec');

//work mode
working = true;

//work timer
work_min = display_min.textContent;
work_sec = display_sec.textContent;
//pause timer
pause_min = 0;
pause_sec = 30;




//ever ticking time if timer_running TRUE
timer_running = false;
window.onload = function countdown() {
    timer = setInterval(function () {
        if (timer_running) {
            min = display_min.textContent;
            sec = display_sec.textContent;
            if (min == 0 && sec == 0) {
                if(working){
                    display_min.textContent = pause_min;
                    display_sec.textContent = pause_sec;
                }else{
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


//Button click event
document.getElementById('play_button').addEventListener("click", function () {
    if (timer_running) {

        //stop-reset
        document.getElementById('play_button').className = 'fa-solid fa-play';
        display_min.textContent = work_min;
        display_sec.textContent = work_sec;
        working = true
    } else {

        //play
        document.getElementById('play_button').className = 'fa-solid fa-rotate-right';


    }
    timer_running = !timer_running
});

/*
function switch_mode(){
    if(working){
        document.getElementsByAtr('body').style("background-color: rgb(255, 3, 20)");
    }else{
        document.getElementsByName('body').style("background-color: rgb(3, 255, 79);");
    }
}
*/
