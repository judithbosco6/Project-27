
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(100,500,20,20);
	bobObject2=new Bob(200,500,20,20);
	bobObject3=new Bob(300,500,20,20);
	bobObject4=new Bob(400,500,20,20);
	bobObject5=new Bob(500,500,20,20);

	rope1=new rope1(bobObject1.body,roofObject.body,bobDiameter*2,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
}



