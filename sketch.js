var tiger, tigerRunning;   
var hunter, hunterimg; 
var fire, fireimg; 
var bg, bgimg; 
var inGround; 

function preload(){
  //tigerRunning = loadAnimation("tiger1.png", "tiger2.png", "tiger4.png"); 
  tigerRunning = loadAnimation("tigerNew1.png", "tiger2.png"); 
  bgimg = loadImage("newbg.png"); 
  hunterimg = loadImage("hunter.png"); 
  fireimg = loadImage("fire.png"); 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(width/4,height/2,100,100); 
  bg.addImage(bgimg);
  bg.velocityX = -5;
  bg.scale = 3.2; 

  tiger = createSprite(800,700,0,0); 
  tiger.addAnimation("tigerRunning", tigerRunning); 
  tiger.scale = 3;

  hunter = createSprite(300,600,0,0); 
  hunter.addImage("hunterimg", hunterimg); 
  hunter.scale = 0.8; 

  inGround = createSprite(width/2,750,width,2); 
  inGround.visible = false; 
}

function draw() {
  background(255,255,255); 
 
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
  console.log(tiger.y);
  if(keyDown("space") && tiger.y > 650){
    tiger.velocityY = -20; 
  }
  tiger.velocityY = tiger.velocityY + 0.8; 

  tiger.collide(inGround); 
  spawnFire(); 
  drawSprites();
}

function spawnFire(){
  if(frameCount%200 === 0){
  fire = createSprite(width,700,0,0); 
  fire.addImage(fireimg); 
  fire.velocityX = -10; 
  fire.scale = 0.3; 
}
}