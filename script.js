//work timer
work_min = 0;
work_sec = 0;
//pause timer
pause_min = 0;
pause_min = 0;

//displayed time
const display_min = document.getElementById('timer_min');
const display_sec = document.getElementById('timer_sec');

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
                    display_min.textContent = min - 1;
                    display_sec.textContent = 59;
                }else{
                    display_sec.textContent = sec - 1;
                }
            }
        }
    },1000);
}


//Button click event
document.getElementById('bouton_lancer').addEventListener("click", function (){
    if(timer_running){
        document.getElementById('bouton_lancer').className = 'fa-solid fa-play';
        
    }else{
        timer_running = !timer_running
        
        document.getElementById('bouton_lancer').className = 'fa-solid fa-rotate-right';
        
        
    }
    
});