const canvas = document.getElementById('ghostCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ghost = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 40,
  angle: 0,
  speed: 0.01
};

function drawGhost() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ghost.angle += ghost.speed;
  ghost.x = canvas.width / 2 + Math.sin(ghost.angle) * 100;
  ghost.y = canvas.height / 2 + Math.cos(ghost.angle * 0.5) * 60;

  ctx.beginPath();
  const gradient = ctx.createRadialGradient(ghost.x, ghost.y, 0, ghost.x, ghost.y, ghost.radius);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = gradient;
  ctx.arc(ghost.x, ghost.y, ghost.radius, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(drawGhost);
}

drawGhost();
