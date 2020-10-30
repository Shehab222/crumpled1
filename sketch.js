var paper1
var dustbin1,dustbin2,dustbin3
var ground
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
	rectMode(CENTER);


	ground=createSprite(400,680,800,20)

	dustbin1=createSprite(690,660,200,20);
    dustbin1.shapeColor=color("yellow");
	

	dustbin2=createSprite(790,620,20,100);
	dustbin2.shapeColor=color("yellow");
	
	
	dustbin3=createSprite(590,620,20,100);
	dustbin3.shapeColor=color("yellow");


	//Create the Bodies Here.
	paper1= new Paper(75,563,45);
    //dustbin1= new dustbin1(700)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  keyPressed();
  stop();
  drawSprites();
 
 
}
 function keyPressed () {
	 if (keyCode == UP_ARROW) {
		 paper1.move();
		// paper1.display();
	 }
 }

function stop () {
	if (paper1.x > 113 ) { 
		Matter.Body.setStatic(paper1,true);
		console.log(paper1.x,paper1.y);
	}
}