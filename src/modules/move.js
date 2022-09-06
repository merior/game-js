const move = () => {


    const box5Move = document.querySelector('.guy');
    const stopBtn = document.querySelector('.stop')
    const startBtn = document.querySelector('.wid__btn')

const moveF = function (e){
  let lastTopCoords = parseFloat(box5Move.style.top);
  let lastLeftCoords = parseFloat(box5Move.style.left);

  if (isNaN(lastTopCoords)) lastTopCoords = 50;
  if (isNaN(lastLeftCoords)) lastLeftCoords = 0;

  switch(e.keyCode) {
    case 40: {
      box5Move.style.top = `${lastTopCoords + 5}px`;
      break;
    }
    case 38: {
      box5Move.style.top = `${lastTopCoords - 5}px`;
      break;
    }
    case 37: {
      box5Move.style.left = `${lastLeftCoords - 5}px`;
      break;
    }
    case 39: {
      box5Move.style.left = `${lastLeftCoords + 5}px`;
      break;
    }
    default: break;
  }
};

document.addEventListener('keydown', (e) => {
  moveF(e)
})



stopBtn.addEventListener("click", function(){
  console.log(2);
  document.removeEventListener('keydown', moveF)
});

// startBtn.addEventListener("click", function(){
// timer = setTimeout(countdown, 5000);
// });

}

module.exports = move
