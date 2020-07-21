export default class InputHandler {
  constructor(paddle) {
    // document.addEventListener('keydown', (event) => {
    //   //alert(event.keyCode);
    //   switch(event.keyCode) {
    //     case 37:
    //       paddle.moveLeft();
    //       break;
    //     case 39:
    //       paddle.moveRight();
    //       break;
    //   }
    // })

    document.getElementById("clickLeft").addEventListener('click', () => {
      paddle.moveLeft();
    })

    document.getElementById("clickJump").addEventListener('click', () => {
      paddle.jump();
    })

    document.getElementById("clickRight").addEventListener('click', () => {
      paddle.moveRight();
    })

    document.addEventListener('keyup', (event) => {
      //alert(event.keyCode);
      switch(event.keyCode) {
        case 37:
          // only stop when you release the key corresponding to the curretn direction of travel
          if (paddle.speed < 0) {
            paddle.stop();
          }
          break;
        case 39:
          if (paddle.speed > 0) {
            paddle.stop();
          }
          break;
      }
    })
  }
}