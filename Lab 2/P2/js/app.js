// ------------------- Variables & Nodes -------------------

const gredeintCanvas = document.getElementById('napoli');
const context = gredeintCanvas.getContext('2d');

context.beginPath();
let grd = context.createRadialGradient(750, 450, 450, 850, 50, 50);
grd.addColorStop(0, '#037ef3');
grd.addColorStop(1, '#fff');
context.arc(500, 300, 250, 0, 2 * Math.PI);
context.fillStyle = grd;
context.fill();
context.closePath();

context.beginPath();
grd = context.createRadialGradient(750, 450, 250, 750, 450, 50);
grd.addColorStop(0, '#037ef3');
grd.addColorStop(1, '#fff');

context.arc(500, 300, 180, 0, 2 * Math.PI);
context.fillStyle = grd;
context.fill();
context.closePath();

context.beginPath();
context.font = 'bold 250px sans-serif';
context.fillStyle = 'white';
context.fillText('N', 410, 380);
context.closePath();
