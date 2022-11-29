const MovingObject = require("./moving_object");
const Util = require("./utils");
// const DEFAULT = {COLOR: , RADIUS: }

class Asteroid extends MovingObject{
    constructor(pos){
        super(pos)
        this.color = "red";
        this.radius = 20;
        this.vel = Util.randomVec(1000)
        // this.vel = Util.randomVec(Util.findNorm(this.vel)); //returns random vel with magnitude given
    }

}

module.exports = Asteroid;