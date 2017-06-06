
var canvas = document.getElementById('tgame');

canvas.width =  800;
canvas.height = 600;

function drawEverything() {
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(255,210, 200,200);
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(ballX, 200, 50, 25);
}
