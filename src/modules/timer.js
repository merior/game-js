
const timer = () => {
    let timer;
    let x =60; 
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

}

module.exports = timer