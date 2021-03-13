class Box{
constructor(x,y,width,height)
{

var Options = {
            restitution : 0.2,
            friction : 1.0,
            density : 0.02
}


this.body = Bodies.rectangle(x,y,width,height,Options);

World.add(world,this.body);

this.width = width;
this.height = height;






}

display(){
    var angle = this.body.angle;

    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    rectMode(CENTER);
    fill("yellow")
    stroke("red")
    strokeWeight(4)
    rect(0,0,this.width,this.height);
    pop()
}




}