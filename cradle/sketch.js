
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
bobD=20
	//Create the Bodies Here.
bob1=new Bob(370,350,20)
bob2=new Bob(390,350,20)
bob3=new Bob(410,350,20)
bob4=new Bob(430,350,20)
bob5=new Bob(450,350,20)
roof=new Roof(width/2,height/4,width/7,20)
	Engine.run(engine);
	roop1=new Rope(bob1.body,roof.body,-bobD*2,0)
	roop2=new Rope(bob2.body,roof.body,-bobD*1,0)
	roop3=new Rope(bob3.body,roof.body,0,0)
	roop4=new Rope(bob4.body,roof.body,bobD*1,0)
	roop5=new Rope(bob5.body,roof.body,bobD*2,0)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 roof.display()
 roop1.display()
 roop2.display()
 roop3.display()
 roop4.display()
 roop5.display()
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45})
	}
}


