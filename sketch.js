var bobDiameter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new BOB (100,200,40)
bob2= new BOB (140,200,40)
bob3= new BOB (180,200,40)
bob4= new BOB (220,200,40)
bob5= new BOB (260,200,40)

groundObject=new ROOF(width/2,90,width,20);
Engine.run(engine);
 
rope1=new ROPE(bob1.body,groundObject.body,-bobDiameter*2,0)
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  groundObject.display();
  drawSprites();
 
}



