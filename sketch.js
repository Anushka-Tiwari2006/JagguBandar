var PLAY = 1;
var END = 0;
var gamestate = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime= 0;
var ground,background, backgroundImage;
var jagguSong;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("ground.png");
jagguSong = loadSound("Jaggu Bandar - chhota bheem.mp3");
  
}



function setup() {
  createCanvas(530,500);
  
  jagguSong.play();
  jagguSong.loop();
  
  background = createSprite(0,0,10,100);
  background.addImage(backgroundImage);
  background.scale = 3.5;
  
  
  
  monkey = createSprite(60,380,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(100,450,900,28)
  ground.visible = true;
  ground.shapeColor = "saddlebrown"
  
  
  foodGroup = createGroup();
  obstaclegroup = createGroup();
  
  
  
  
}


function draw() {
  
  
   background.velocityX = -3 
  
  
    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -13; 
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
survivalTime = survivalTime+Math.round(getFrameRate()/60); 
 
  food();
  obstacles();
  
  drawSprites();
  textSize (18);
  fill("lightBlue")
  text("Survival Time : " + survivalTime,360,20);
  
  monkey.collide(ground);


}

function food(){
  if(frameCount%200===0){
  banana = createSprite(500,0,20,20);
  banana.y = Math.round(random(100,200))  
  banana.addImage(bananaImage);
  banana.scale = 0.15;
  banana.velocityX = -7;
  banana.lifetime = 80; 
  
}
   }

function obstacles(){
  if(frameCount%70===0){
  obstacle = createSprite(500,410,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -5;  
  obstacle.lifetime = 100;  





}

}