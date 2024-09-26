

travail = true

function countdown(){

    timer = setInterval(function(){
        b_timer_min = document.getElementById('timer_min');
        b_timer_sec = document.getElementById('timer_sec');
        min = b_timer_min.textContent;
        sec = b_timer_sec.textContent;

        console.log('min ->' + min);
        console.log('sec -> ' + sec);
        console.log('travail -> ' + travail);

        if(min == 0 && sec == 0){
            travail = !travail;
        }
        if(sec == 0){
            console.log(b_timer_sec.textContent)
            b_timer_min.textContent = min - 1;
            b_timer_sec.textContent = 59;
        }else{
            b_timer_sec.textContent = sec - 1;
        }
    },1000);
}