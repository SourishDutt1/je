class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("images/Walking Frame/walking_1.png");
        
        
        this.body = Bodies.circle(x=canvas.width/2,y,50,options);
        this.radius = 50;
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x=canvas.width/2,pos.y+70,300,300);

    }
}