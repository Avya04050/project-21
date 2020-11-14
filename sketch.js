var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(221, 321);
  weight=random(30, 52);
  thickness=random(22, 83);
  bullet=createSprite(50, 200, 35, 7);
  bullet.velocityX = speed;
  bullet.shapeColor="white";
  wall=createSprite(1000, 200, thickness, height/2);
  wall.shapeColor= color(80, 80, 80);
}

function draw() {
  background(0); 
   if(wall.x-bullet.x< (bullet.width+wall.width)/2){
     bullet.velocityX=0;
     var damage=0.5*weight*speed*speed/thickness* thickness*thickness;
     if(damage>10){
       wall.shapeColor=color(255, 0, 0);
     }
     if(damage<10){
      wall.shapeColor=color(0, 250, 0);
    }
   }
  drawSprites();
}

function hasCollided(bullet, wall){
     bulletRightEdge=bullet.x+bullet.width;
     wallLeftEftEdge=wall.x;
     if(bulletRightEdge<=wallLeftEdge){
       return true;
     }
     return false;
}