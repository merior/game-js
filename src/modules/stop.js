const stop = () => {
  
    const stopBtn = document.querySelectorAll('.stop')
    const startBtn = document.querySelectorAll('.wid__btn')
    const modal = document.querySelectorAll('.modal')
    const modalOverlay = document.querySelectorAll('.modal__overlay')

    console.log(stopBtn)
    console.log(startBtn)
    console.log(modal)
    console.log(modalOverlay)

    // stopBtn.addEventListener("click", function(){
    //     modal.classList.toggle("closed");
    //     modalOverlay.classList.toggle("closed");
    //  });

     startBtn.addEventListener("click", function(){
        // modal.classList.toggle("closed");
        // modalOverlay.classList.toggle("closed");
        console.log('click')
     });
}

module.exports = stop