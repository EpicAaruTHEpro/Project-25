//creates the class for the side part of the trash class
class sidePart {
    //constructs the object with argument x
    constructor(x) {
        //creates the options variable to make the object static
        var options ={
            isStatic: true
        }

        //creates the body with its position, sizing, and static and as a rectangle
        this.body = Bodies.rectangle(x,559,20,200,options);
        this.width = 20;
        this.height = 200;
        //adds body to world
        World.add(world, this.body);
    }

    //display body
    display() {
        //position variable for the body
        var pos = this.body.position;
        //centers rectangle
        rectMode(CENTER);
        //colors the body white
        noStroke();
        fill("white");
        //creates the displayed body as a rectangle
        rect(pos.x, pos.y, this.width, this.height);
    }
}