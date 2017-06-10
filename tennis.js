
var canvasContext;
var ballX = 50;

window.onload = function() {
 canvas = document.getElementById('tgame');
 canvasContext = canvas.getContext('2d');

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 setInterval(drawEverything, 1000);
}





function drawEverything() {
  ballX = ballX + 20;

  console.log(ballX);
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(255,210, 200,200);
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(ballX, 100, 10, 10);
}
