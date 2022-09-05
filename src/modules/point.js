const point = () => {
 
    let timer;
    let x =0; 
    countdown(); 
    function countdown(){ 
      document.getElementById('point').innerHTML = x;
      x = x+10; 
     
    
        timer = setTimeout(countdown, 5000);
      
    }

}

module.exports = point