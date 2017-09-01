window.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const button = document.querySelector(`.commands[data-key="${event.keyCode}"]`);
  button.classList.add('playing');
});

const keys = document.querySelectorAll(`.commands[data-key]`);
keys.forEach(key => key.addEventListener('transitionend', event => {
  event.target.classList.remove('playing');
}));
