const canvas = document.getElementById('ghostCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function drawGhost(x, y) {
  const headRadius = 30;
  const torsoWidth = 60;
  const torsoHeight = 120;

  ctx.save();
  ctx.translate(x, y);

  // Head (glowing gradient)
  let headGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, headRadius);
  headGradient.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
  headGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = headGradient;
  ctx.beginPath();
  ctx.arc(0, 0, headRadius, 0, Math.PI * 2);
  ctx.fill();

  // Torso (vertical fade)
  let bodyGradient = ctx.createLinearGradient(0, 0, 0, torsoHeight);
  bodyGradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
  bodyGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = bodyGradient;
  ctx.beginPath();
  ctx.ellipse(0, torsoHeight / 2, torsoWidth, torsoHeight, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  angle += 0.005;

  let x = canvas.width / 2 + Math.sin(angle) * 100;
  let y = canvas.height / 2 + Math.cos(angle * 0.5) * 60;

  drawGhost(x, y);

  requestAnimationFrame(animate);
}

animate();
