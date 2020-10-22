
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	startBobPositionX=400;
	startBobPositionY=675;

	

	roofObject = new Roof(400,175,400,20);
	bobObject1 = new Bob(320,575,bobDiameter);
	bobObject2 = new Bob(360,575,bobDiameter);
	bobObject3 = new Bob(400,575,bobDiameter);
	bobObject4 = new Bob(440,575,bobDiameter);
	bobObject5 = new Bob(480,575,bobDiameter);






rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
rope3=new rope(bobObject3.body,roofObject.body,0,0)
rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)

  
}


function draw() {
  Engine.update(engine); 
  rectMode(CENTER);
  background(220);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
 
}

function keyPressed(){



	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}



