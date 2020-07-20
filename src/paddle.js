export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth

    // size of object
    this.width = 150;
    this.height = 20;

    // initial speed and constraints
    this.speed = 0;
    this.maxSpeed = 7;

    // initial position
    this.position = {
      x: gameWidth / 2 - this.width / 2, // middle of screen
      y: gameHeight - this.height - 10 // 10px off the bottom
    }
  }

  moveLeft() {
    this.speed = -this.maxSpeed; // moving maxspeed in -ve direction
  }

  moveRight() {
    this.speed = this.maxSpeed; // moving maxspeed in -ve direction
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = '#0ff'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(deltaTime) {
    if (!deltaTime) return; // the first time .update is called there is no timestamp to pass in
    // delta time = time passed since the last update
    // technically speed should be multiplied by time
    this.position.x +=  this.speed;
    
    // make sure paddle doesn't leave the screen
    if(this.position.x  < 0) this.position.x  =  0; 
    if(this.position.x  > this.gameWidth - this.width) this.position.x  =  this.gameWidth - this.width; 
  }
}