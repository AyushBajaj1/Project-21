var bullet, wall;
var speed, weight;
var thickness;

function setup() {
speed=random(223,321);
weight=random(30,52);


  createCanvas(1600,400);
  bullet=createSprite(50, 200, 70, 10); 
  bullet.shapeColor="white";

  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor=(80,80,80);

}

function draw() {
  bullet.velocityX=speed;

if (HasCollided(bullet,wall)) {
  bullet.velocityX=0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10) {
wall.shapeColor=color(255,0,0);
  }

   if (damage<10) {
     wall.shapeColor=color(0,255,0);
   }
}


console.log(damage);




  background(0,0,0);  
  drawSprites();
}
function HasCollided(lbullet,lwall) {

  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge) {
        return true
    }
    else return false;
}