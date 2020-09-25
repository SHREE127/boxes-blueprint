const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var box1, box2;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  
  var option={

    isStatic : true

  

  }

  ground=Bodies.rectangle(400,390,800,10,option);
 

  World.add(world,ground);
  
  fill("blue")
  box1 = new box(100,20,40,40);
  
  box2 = new box(105,10,30,30);

}

function draw() {
  background("red");  

  Engine.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10);

  
  box1.display();
  box2.display();

  drawSprites();
}