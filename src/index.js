console.log("Webpack is working!")
// import MovingObject from './moving_object';

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;
// const mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 50,
//   color: "#00FF00"
// });

const canvas = document.getElementById("game-canvas")
let context = canvas.getContext("2d")
console.log(canvas)
let new_moving_obj = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 50,
  color: "#00FF00"
});
new_moving_obj.draw(context)