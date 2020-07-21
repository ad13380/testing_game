export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    // size of object
    this.width = 50;
    this.height = 50;

    // initial speed and constraints
    this.speed = {
      x: 0,
      y: 0
    }
    this.maxSpeed = 10;
    this.jumpSpeed = 20;

    // initial position
    this.position = {
      x: 0, // middle of screen
      y: gameHeight - this.height // 10px off the bottom
    }
  }

  moveLeft() {
    this.speed.x = -this.maxSpeed; // moving maxspeed in -ve direction
  }

  moveRight() {
    this.speed.x = this.maxSpeed; // moving maxspeed in -ve direction
  }

  jump() {
    this.speed.y -= this.jumpSpeed;
  }

  stop() {
    this.speed.x = 0;
  }

  draw(ctx) {
    ctx.fillStyle = '#0ff'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(deltaTime) {
    if (!deltaTime) return; // the first time .update is called there is no timestamp to pass in
    // delta time = time passed since the last update
    // technically speed should be multiplied by time

    this.speed.y += 0.9; //gravity
    this.position.y += this.speed.y // update position
    this.position.x += this.speed.x;
    this.speed.x *= 0.9; // friction
    this.speed.y *= 0.9;
    
    // make sure paddle doesn't leave the screen
    if(this.position.x  < 0) this.position.x  =  0; 
    if(this.position.x  > this.gameWidth - this.width) this.position.x  =  this.gameWidth - this.width; 

    // make sure paddle doesn't fall through the floor
    if(this.position.y > this.gameHeight - this.height) {
      this.position.y = this.gameHeight - this.height;
      this.speed.y = 0;
    }
  }
}