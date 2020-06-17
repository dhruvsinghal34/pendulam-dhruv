const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;

var ground,ground1;
var slingshot;
function preload(){
  back=loadImage("space.jpg");
}

function setup() {
  createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

  ground1=new Pen (200,20,50);
 
  slingshot=new Chain(ground1.body,{x:200,y:200},"yellow");
   ground=new Ground (200,500,1200,30);
   
   }

function draw() {
  background(back);  
  Engine.update(engine);
  fill ("yellow");
  rect(100,190,200,20);
  ground1.display();
   
  slingshot.display();
  ground.display();
}



function mouseDragged(){
  Matter.Body.setPosition(ground1.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
      chain.Fly();
  }
 
  
    
    