// ------------------- Variables & Nodes -------------------

const gredeintCanvas = document.getElementById('gredient');
const context = gredeintCanvas.getContext('2d');

let grd = context.createLinearGradient(100, 50, 100, 350);
grd.addColorStop(0, '#00bce4');
grd.addColorStop(1, '#fff');
context.fillStyle = grd;

context.fillRect(100, 50, 800, 300);

grd = context.createLinearGradient(100, 400, 100, 700);
grd.addColorStop(0, '#2c9f45');
grd.addColorStop(1, '#fff');
context.fillStyle = grd;

context.fillRect(100, 400, 800, 300);

context.beginPath();

context.moveTo(400, 350);
context.lineTo(600, 350);
context.lineTo(600, 450);
context.moveTo(400, 350);
context.lineTo(400, 450);
context.lineWidth = '3';
context.stroke();
context.closePath();
