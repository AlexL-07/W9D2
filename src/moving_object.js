const Util = require("./utils")
class MovingObject {
    constructor(options){
        this.pos = options["pos"]
        this.vel = options["vel"]
        this.radius = options["radius"]
        this.color = options["color"]
    }

    move(ctx){
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.draw(ctx);
    }

    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    isCollidedWith(otherMovingObject){

    }
}


// MovingObject.prototype.move = function(){
//     this.pos[0] += this.vel[0]
//     this.pos[1] += this.vel[1]
// }

// MovingObject.prototype.draw = function(ctx){
//     ctx.fillStyle = this.color;
//     ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
//     ctx.fill();

// }

// MovingObject.prototype.isCollidedWith = function(otherMovingObject){
    
// }
module.exports = MovingObject;
