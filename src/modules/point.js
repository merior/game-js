const point = () => {
 
    let timer;
    let x =0; 
    const stopBtn = document.querySelector('.stop')
    const startBtn = document.querySelector('.wid__btn')
    countdown(); 
    function countdown(){ 
      document.getElementById('point').innerHTML = x;
      x = x+10; 

      if(x>120){
        clearTimeout(timer); 
      } else{
        timer = setTimeout(countdown, 5000);
      }
    }

    stopBtn.addEventListener("click", function(){
      clearInterval(timer);
   });

   startBtn.addEventListener("click", function(){
    timer = setTimeout(countdown, 5000);
 });

}

module.exports = point