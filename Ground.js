//creates the class for the ground
class Ground{
    //constructor that takes arguments x,y,width,height
    constructor(x,y,width,height) {
        //creates options variable to make the body static
        var options ={
            isStatic:true
        }

        //creates the body with its position, sizing, and static and as a rectangle
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //adds body to the world
        World.add(world, this.body);
    }

    //display body
    display() {
        //position variable for the body
        var pos = this.body.position;
        //centers rectangle
        rectMode(CENTER);
        //colors the body yellow
        fill("grey");
        //creates the displayed body as a rectangle
        rect(pos.x, pos.y, this.width, this.height);
    }
}