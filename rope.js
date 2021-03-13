class Rope{
constructor(bodyA,pointB)
{
var Options =  {
bodyA :bodyA,   
pointB : pointB,

stiffness : 1,
length : 300
}

this.pointB = pointB;

this.rope = Constraint.create(Options);
World.add (world,this.rope)






}

display(){
push()
strokeWeight(5);    
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
pop()

}
















}