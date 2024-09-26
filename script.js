//displayed time
const display_min = document.getElementById('timer_min');
const display_sec = document.getElementById('timer_sec');

//work timer
work_min = display_min.textContent;
work_sec = display_sec.textContent;
//pause timer
pause_min = 0;
pause_min = 0;



//ever ticking time if timer_running TRUE
timer_running = false;
window.onload =function countdown(){
    timer = setInterval(function(){
        if(timer_running){
            min = display_min.textContent;
            sec = display_sec.textContent;
            if(min == 0 && sec == 0){
                timer_running = !timer_running
                document.getElementById('bouton_lancer').className = 'fa-solid fa-play';
            }else{
                if(sec == 0){
                    if(min < 11){
                        display_min.textContent = '0' + (min - 1);
                    }else{
                        display_min.textContent = min - 1;
                    }
                    
                    display_sec.textContent = 59;
                }else{
                    if(sec < 11){
                        display_sec.textContent = '0' + (sec - 1);
                    }else{
                        display_sec.textContent = sec - 1;
                    }
                    
                }
            }
        }
    },1000);
}


//Button click event
document.getElementById('bouton_lancer').addEventListener("click", function (){
    if(timer_running){

        //stop-reset
        document.getElementById('bouton_lancer').className = 'fa-solid fa-play';
        display_min.textContent = work_min;
        display_sec.textContent + work_sec;
    }else{

        //play
        document.getElementById('bouton_lancer').className = 'fa-solid fa-rotate-right';
        
        
    }
    timer_running = !timer_running
});