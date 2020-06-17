const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engines, world;
var ball;
var platform;
var ground;
var platformGroup;
var wall;
var score;

function setup() {
  createCanvas(400,400);
  engines = Engine.create();
    world = engines.world;
  ground = createSprite(200,200,10000000,10000000);
  ground.shapeColor="black";
  wall = new Wall(300,100,30,1000000);
  ball = new Ball(100,300,20,20);
  ball.shapeColor = "red";
  
  ground.velocityX = -10;

  score = 0;

}

function draw() {
  background("white");
  
Engine.update(engines);

  ball.velocityY =1;
  
  if(keyDown("space")&& ball.y>180){
    ball.velocityY = -20;
  }

  


  Platforms();
  wall.display();
  ball.display();
  platform.display();
  score = score + Math.round(getFrameRate()/60);
  
  text("Score:"+score,200,100);
  

  drawSprites();
}

function Platforms(){
if(frameCount%60===0){
  var rand = random(100,200);
  platform = new Platform(300,300,rand,rand);
  platform.velocityX = -10;

  platform.lifetime = 300;
  platform.shapeColor = "orange";
  //platformGroup.add(platform);
}


}