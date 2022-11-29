console.log("Webpack is working!")
// import MovingObject from './moving_object';

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./utils.js");
const Game = require("./game.js");


const canvas = document.getElementById("game-canvas")
const context = canvas.getContext("2d")
window.MovingObject = MovingObject;

// const mo = new MovingObject({
//   pos: [200, 100],
//   vel: [10, 10],
//   radius: 50,
//   color: "#00FF00"
// });
// mo.draw(context)
// mo.move()
// mo.draw(context)

// const astro = new Asteroid({pos: [50, 50]})
// astro.draw(context)
// astro.move()
// astro.draw(context)
const g = new Game();
console.log(g);
g.draw(context);
console.log("pls")


