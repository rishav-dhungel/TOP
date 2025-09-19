window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function removeTransition(event){
  if(event.propertyName !== "transform") return;
  this.classList.remove('playing');
}

function playSound(event){
  console.log(event.keyCode);
  let keyCode = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  console.log(key);
  console.log(audio);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing")
}