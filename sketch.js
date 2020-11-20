const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(370,550,300,20);
	ground2 = new Ground(630,400,200,20);

    //2ND GROUND    
	block1 = new Box(670,380,30,40);
	block2 = new Box(640,380,30,40);
	block3 = new Box(590,380,30,40);
	block4 = new Box(630,380,30,40);
	block5 = new Box(620,350,30,40);
	block6 = new Box(611,330,30,40);
	block7 = new Box(600,350,30,40);
	block8 = new Box(330,520,30,40);
	block9 = new Box(360,520,30,40);
	block10 = new Box(390,520,30,40);
	block11 = new Box(420,520,30,40);
	block12 = new Box(450,520,30,40);
	block13 = new Box(360,460,30,40);
	block14 = new Box(390,460,30,40);
	block15= new Box(420,460,30,40);
	block16 = new Box(390,390,30,40);
	block17 = new Box(570,390,30,40);
    block18 = new Box(630,360,30,40);
    block19 = new Box(300,480,30,40);
    block20 = new Box(330,480,30,40);
    block21 = new Box(360,480,30,40);
    block22 = new Box(270,470,30,40);
    block23 = new Box(300,470,30,40);
    block24 = new Box(330,470,30,40);
    block25 = new Box(360,470,30,40);

    bird = new Bird(100,450);

    slingshot = new SlingShot(bird.body,{x:100, y:450});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);

    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    bird.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}