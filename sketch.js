var box,box1,box2,box3,boxIMG;
var ground;
var paper,paperIMG;
var Slingshot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
    boxIMG = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1200, 700);
  box = createSprite(900,530,20,20);
  box.addImage(boxIMG);
  box.scale = .89;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(900,650,200,20);
	box2 = new Box(800,600,20,100);
	box3 = new Box(1000,600,20,100);

	ground = new Ground(450,670,1600,20);

	paper = new Ball(200,200,50);

  Slingshot = new SlingShot(paper.body,{x:200,y:500})

	//keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#00ff00");
  Engine.update(engine);
	
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  paper.display();

  Slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}

// function keyPressed(){
//     if (keyCode === UP_ARROW ) {
//       Matter.Body.applyForce(paper.body, paper.body.position, {x: 170,y: -150})
//     }
// }
