function playSound() {
  let chicken = document.querySelector('[data-chicken]');
  const audio = document.querySelector('[data-audio]');
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    chicken.classList.add('playing');
  }
}

function removeTransition(e) {
  if(e.propertyName == 'animation') {
    this.classList.remove('playing');
  }
}

function addChickenListener() {
  let chicken = document.querySelector('[data-chicken]');
  if(chicken) {
    chicken.addEventListener('click', playSound);
    chicken.addEventListener('animationend', removeTransition)
  }
}

addChickenListener();