const Asteroid = require("./asteroid")

class Game {
    constructor(){
        this.dim_x = 600
        this.dim_y = 1000
        this.num_asteroids = 0
        this.asteroids = []
        this.addAsteroids();
    }

    addAsteroids(){
        for (let i=0; i<10; i++){
            let rand_x = Math.floor(Math.random()*600);
            let rand_y = Math.floor(Math.random()*1000);
            this.asteroids.push(new Asteroid({pos:[rand_x, rand_y]}))
            this.num_asteroids++;
        }
    }

    draw(ctx){
        console.log('game.draw() is running!')
        ctx.clearRect(0,0,this.dim_x, this.dim_y);
        // for (let i=0; i<this.asteroids.length; i++){
        //     this.asteroids[i].draw(ctx);
        // }
        this.asteroids.forEach(function(asteroid){asteroid.draw(ctx)})
        
    }

    moveObjects(){
        this.asteroids.forEach(function(asteroid){asteroid.move()})
    }

    step(){

    }

    move(){

    }

    checkCollisions(){

    }

  
}
    
module.exports = Game;