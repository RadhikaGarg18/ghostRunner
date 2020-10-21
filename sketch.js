var tower, towerImage;
var door,doorImage;
var doorGroup,railGroup;
var rail,railImage;
var ghost,ghostImage;

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300,600,600);
  tower.addImage("tower",towerImage)
  tower.velocityY = 7;
  
  railImage = loadImage("climber.png");
  
  railGroup = new Group();
  doorGroup = new Group();
  
  ghost = createSprite(100,450,30,50);
  ghost.addImage("ghost",ghostImage);
  ghost.scale = 0.3;
}

function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  ghostImage = loadImage("ghost-standing.png");
}

function draw(){
  background(220);
  
  if (tower.y > 600){
    tower.y = tower.y/2
  }
  
  if(keyDown("space")){
    ghost.velocityY = -8;
  }
  if(keyDown("RIGHT_ARROW")){
    ghost.x = ghost.x + 8;
  }
  if(keyDown("LEFT_ARROW")){
    ghost.x = ghost.x - 8;
  }
  if(railGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  spawnDoor();
  drawSprites();
}


function spawnDoor(){
  if(frameCount % 60 === 0){
    door = createSprite(300,100,30,30);
    rail = createSprite(300,150,50,30)
    door.addImage("gate",doorImage);
    rail.addImage("rails",railImage);
    door.x = Math.round(random(150,450));
    rail.x = door.x;
    door.velocityY = 7;
    rail.velocityY = 7;
    door.lifetime = 300;
    rail.lifetime = 300;
    doorGroup.add(door);
    railGroup.add(rail);
    
  }
}




