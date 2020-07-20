import Paddle from './paddle.js';
import InputHandler from './input.js';

let canvas = document.getElementById("gameScreen");
// The getContext() is a built-in HTML object, with properties and methods for drawing
let ctx = canvas.getContext('2d');

// defining this you can pass it into your other game objects when you define their positions
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// define colour
// always define the fillStyle before the fillRect
// this fillStyle will be used for every fillRect you define unless you update it
//  ctx.fillStyle = '#f00';
// define size and position of rectangle
//  ctx.fillRect(20, 20, 100, 100);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
paddle.draw(ctx)

new InputHandler(paddle)

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime
  lastTime = timestamp
  // clear the whole screen
  // otherwise if you modiy a shape, the old version of the shape will still be there
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT) // i tried commenting out, apparently doesn't make a difference
  paddle.update(deltaTime); // update paddle position
  paddle.draw(ctx);

  // tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint
  // the callback function is the gameLoop
  // BY DEFAULT, the caallback function you pass is given an argument of the timestamp
  requestAnimationFrame(gameLoop);
}

gameLoop()
