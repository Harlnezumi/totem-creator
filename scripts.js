let score = 0;
let snakeSize = 0;
let appleX;
let appleY;
let snakeX = 0;
let snakeY = 0;
let gameOver = false;
let direction = "right";
let totalCol = 37;
let totalRow = 20;

const canvas = document.getElementById("canvas");
let field = {x: 10, y: 10, w: 800, h: 400}
const ctx = canvas.getContext("2d");
ctx.fillRect(field.x, field.y, field.w, field.h);

// setting a random food position
function appleSpawn() {
  appleX = Math.random() * (field.w);
  appleY = Math.random() * (field.h);
  ctx.fillStyle = "red"
  ctx.fillRect(appleX, appleY, 10, 10);
  console.log(appleX, appleY)
}
function drawSnake() {
//snake head
  ctx.fillStyle = "rgb(52, 235, 73)";
  ctx.fillRect(45, 25, 20, 20);
  ctx.fillStyle = "white";
  ctx.fillRect(54, 29, 7, 7);
  ctx.fillStyle = "black";
  ctx.fillRect(55, 30, 5, 5)

//snake body
  ctx.fillStyle = "rgb(52, 235, 73)";
  ctx.fillRect(24, 25, 20, 20);
  ctx.fillStyle = "rgb(19, 66, 24)";
  for (let i = 25; i < 44;) {
    ctx.fillRect(i, 25, 2, 10)
    i += 4;
  }
}

function checkStatus() {
  if (gameOver){
    return;
  }
}
start.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(field.x, field.y, field.w, field.h);
  drawSnake();
  appleSpawn();
});


