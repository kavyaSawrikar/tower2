
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottumBox
var left;
var right;
var ball;
var ground;
var ballImage
var binImage
var mango;
var mangoImage;
var mango1;
var mangoImage1;
var mango2;
var mangoImage2;

function preload()
{
	ballImage = loadImage("rock.png");
	mangoImage1 = loadImage("mango5.png");
	mangoImage = loadImage("mango5.png");
	mangoImage2 = loadImage("mango5.png");
}

function setup() {
	createCanvas(800, 700);

	ground = createSprite(500,700,1000,50);
	ground.shapeColor = ("white");

	ball=createSprite(100,665,25,[25],[25]);
	ball.shapeColor = ("blue");
	ball.addImage(ballImage);
	ball.scale = 0.05;

	

	mango = createSprite(610,500,40,40);
	mango.shapeColor = ("purple");


	mango1 = createSprite(550,530,40,40);
	mango1.shapeColor = ("pink");


	mango2 = createSprite(550,480,40,40);
	mango2.shapeColor = ("blue");


	//left=createSprite(510,625,20,100);
	//left.shapeColor = (rgb(139,69,19));

	right=createSprite(687,590,10,100);
	right.shapeColor = ("white");

	world=right.world;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(999);
  ball.velocityY = ball.velocityY +0.8;
  ball.collide(ground);
  ball.collide(mango);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		ball.velocityY = -10;
		ball.velocityX = 20;
		mango.shapeColor = ("white");
		mango1.shapeColor = ("white");
		mango2.shapeColor = ("white");
		mango1.velocityY = 6;
		mango2.velocityY = 4;	
		
//Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	}

}


