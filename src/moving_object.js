function MovingObject(options){
    this.pos = options["pos"]
    this.vel = options["vel"]
    this.radius = options["radius"]
    this.color = options["color"]
}


MovingObject.prototype.move = function(){
}

MovingObject.prototype.draw = function(ctx){
    ctx.fill();
    ctx.fillStyle ="black";
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
}

MovingObject.prototype.isCollidedWith = function(otherMovingObject){
    
}
module.exports = MovingObject;
