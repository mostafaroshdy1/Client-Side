// ------------------- Variables & Nodes -------------------
const gredeintCanvas = document.getElementById('animation');
const context = gredeintCanvas.getContext('2d');

context.beginPath();
context.fillStyle = 'gray';
context.moveTo(0, 0);
context.lineTo(100, 100);
context.lineWidth = '8';
context.strokeStyle = '#7f181b';
context.stroke();

x = 100;
y = 100;

function animate() {
	x += 5;
	y += 5;

	context.lineTo(x, y);
	context.stroke();

	if (x > 800 && y > 800) {
		alert('Animation Done');
		return;
	} else {
		requestAnimationFrame(animate);
	}
}
requestAnimationFrame(animate);

context.closePath();
