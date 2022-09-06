// const timer = require(`./modules/timer`)
// const point = require(`./modules/point`)
// const move = require(`./modules/move`)

const stop = () => {
  
    const stopBtn = document.querySelector('.stop')
    const startBtn = document.querySelector('.wid__btn')
    const modal = document.querySelector('.modal')
    const modalOverlay = document.querySelector('.modal__overlay')

    stopBtn.addEventListener("click", function(){
      console.log(1);

        modal.classList.remove("closed");
        modalOverlay.classList.remove("closed");

         // timer2.Stop();
     });

     startBtn.addEventListener("click", function(){
        modal.classList.add("closed");
        modalOverlay.classList.add("closed");
        
     });


}

module.exports = stop