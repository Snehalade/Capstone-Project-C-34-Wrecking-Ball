const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3,box4;
var ball;
var rope;

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  var Options = {isStatic : true };
 ground = Bodies.rectangle(500,585,1000,30,Options);
 World.add(world,ground);

  box1 = new Box(800,580,100,100);
  box2 = new Box(800,450,100,100);
  box3 = new Box(800,400,100,100);
  box4 = new Box(800,350,100,100);

  ball = new Ball(500,300,200,200);

  rope = new Rope(ball.body,{x : 500, y : 10});
}

function draw() {
  background("blue"); 
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,30);

 

  box1.display();
  box2.display();
  box3.display();
  box4.display();

 

  rope.display();

  ball.display();
  
 // textSize(32); 
  //text("x : "+mouseX+"y :"+mouseY, mouseX, mouseY)
    
}
  function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x : mouseX, y : mouseY});

  }

