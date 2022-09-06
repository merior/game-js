
const timer = () => {
    let timer;
    let x =60; 
    const stopBtn = document.querySelector('.stop')
    const startBtn = document.querySelector('.wid__btn')
    countdown(); 
    function countdown(){ 
      document.getElementById('rocket').innerHTML = x;
      x--; 
      if (x<0){
        clearTimeout(timer); 
        alert('вы выйграли треш!!');
      }
      else {
        timer = setTimeout(countdown, 1000);
      }
    }

    stopBtn.addEventListener("click", function(){
      clearInterval(timer);
   });

   startBtn.addEventListener("click", function(){
    timer = setTimeout(countdown, 1000);
 });

}

module.exports = timer