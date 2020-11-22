var fixedRect, movingRect, car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(900, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(900, 800,50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(300, 100, 50, 80);
  car.shapeColor = "blue";
  car.debug = true;
  wall = createSprite(300, 800, 50, 80);
  wall.shapeColor = "blue";
  wall.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  car.velocityY = +5;
  wall.velocityY = -5;
}

function draw() {
  background(0,0,0);  

 
  drawSprites();
  bounce(car, wall);
  bounceOff(fixedRect, movingRect);
}