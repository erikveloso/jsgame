window.onload = function () {
  'use strict';
  
  var canvas = document.getElementById('canvas');
  
  var ctx = canvas.getContext("2d");
  
  var ballRadius = 10;
  var dx = 2.0;
  var dy = -2.0;
  var x = canvas.width/2;
  var y = canvas.height/2;
  var paddleHeight = 10;
  var paddleWidth = 75;
  var paddleX = (paddleWidth - canvas.width)/ 2
  var rightPressed = false;
  var leftPressed = false
  
  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyDownHandler, false);
  
  var keyDownHandler = function (e) {
    if (e.keyCode == 39) {
      rughtPressed  =1
    }
    else if (e,keCOde = 37) {
      leftPressed = true;   
    })
  }
  var drawBall = function () {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    
    if (y - ballRadius < 0 || y + ballRadius > canvas.height) {
      dy = -dy;
    }
    if (x - ballRadius < 0 || x + ballRadius > canvas.width) {
      dx = -dx;
    }
  };
  
  var drawPaddle = function () {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  
  var draw = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;
  };

  setInterval(draw, 10);

};

