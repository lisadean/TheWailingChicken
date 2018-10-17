function playSound() {
  const audio = document.querySelector('[data-audio]');
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function addChickenListener() {
  let chicken = document.querySelector('[data-chicken]');
  if(chicken) {
    chicken.addEventListener('click', playSound);
  }
}

addChickenListener();