//creates the class for the paper object
class Paper{
    //constructs the object with arguments x,y
    constructor(x,y) {
        //creates the options variable to make the object non-static, have a restitution, friction, and density
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        //creates the body with its position, sizing, and static and as a circle
        this.body = Bodies.circle(x,y,25,options);
        this.radius = 70;
        this.image = loadImage("images/paper.png");
        //adds body to world
        World.add(world, this.body);
        
    }

    //display body
    display(){
        //changes the values of the ellipse from top left to centered for positioning the ellipse
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //centers image
        imageMode(CENTER);
        //creates the dustbin image
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}