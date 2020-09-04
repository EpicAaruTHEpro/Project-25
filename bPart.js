//creates the class for the bottom part of the trash class
class bPart{
    //constructs the object with arguments x,y,width,height
    constructor(x,y,width,height) {
        //creates the options variable to make the object static
        var options ={
            isStatic: true
        }

        //creates the body with its position, sizing, and static and as a rectangle
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/dustbingreen.png");
        //adds body to world
        World.add(world, this.body);
    }

    //display body
    display() {
        //position variable for the body
        var pos = this.body.position;
        //centers rectangle
        imageMode(CENTER);
        //colors the body white
        //noStroke();
        //fill("white");
        //creates the displayed body as a rectangle
        image(this.image,pos.x, 560, this.width, 200);
    }
}