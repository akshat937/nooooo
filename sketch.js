
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,900,20);
	ball = new Paper(100,430,20);
	box1 = new Dustbin(650,675,140,10);
	box2 = new Dustbin(580,630,20,80);
  box3 = new Dustbin(720,630,20,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60})
	}
}


