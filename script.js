const forward = document.getElementById('ghostVidForward');
const reverse = document.getElementById('ghostVidReverse');

// Start with forward video
reverse.style.display = 'none';
forward.play();

forward.addEventListener('ended', () => {
  forward.style.display = 'none';
  reverse.style.display = 'block';
  reverse.currentTime = 0;
  reverse.play();
});

reverse.addEventListener('ended', () => {
  reverse.style.display = 'none';
  forward.style.display = 'block';
  forward.currentTime = 0;
  forward.play();
});
