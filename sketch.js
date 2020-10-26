
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render=Matter.Render;


var ground1,tree1,stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boy,boyImage,world;
var launcherObject;
var launchingForce=100;

function preload()
{
	boyImage = loadImage("images/boy.png")
	
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	
	world = engine.world;

	boy = createSprite(200,510,2,2);
	boy.addImage(boyImage);
	boy.scale =0.13;

	//Create the Bodies Here.
	ground1 = new ground(width/2,600,width,20);
	tree1 = new tree(1000,350,450,500);
	stone1 = new stone(130,420,30);

	mango1 = new mango(850,300,35);
	mango2 = new mango(1100,300,35);
	mango3 = new mango(950,200,35);
	mango4 = new mango(1050,200,35);
	mango5 = new mango(1000,280,30);
	mango6 = new mango(1150,260,35);
	mango7 = new mango(950,260,35);

	launcherObject=new launcher(stone1.body,{x:130,y:420});
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine);
	
  
}


function draw() {
	
  rectMode(CENTER);
  background("GREY");
  
  
  ground1.display();
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
 launcherObject.display();

 detectCollision(stone1,mango1);
 detectCollision(stone1,mango2);
 detectCollision(stone1,mango3);
 detectCollision(stone1,mango4);
 detectCollision(stone1,mango5);
 detectCollision(stone1,mango6);
 detectCollision(stone1,mango7);

  drawSprites();
 
}

function keyPressed(){

	if(keyCode ==32){

		Matter.Body.setPosition(stone1.body,{x:235,y:420})
		launcherObject.attach(stone1.body);
	}
}

function detectCollision(stone1,mango1){

	mango1.position = mango1.body.position;
	stone1.position = stone1.body.position;

	var distance=dist(stone1.position.x,stone1.position.y,mango1.position.x,mango1.position.y);
	if(distance<=mango1.r+stone1.r){

		Matter.Body.setStatic(mango1.body,false);
	}

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcherObject.fly();
}