
var bg
var bgSprite
function preload(){
bg= loadImage ("images/sky.png") 
}
function setup() {
  createCanvas(800,200);
  
  bgSprite = createSprite(400, 200, 50, 50);
  bgSprite.addImage(bg)
  //bgSprite.scale = 2
  bgSprite.velocityX = -3;
  console.log(bgSprite.width);
}

function draw() {
  background(255,255,255);  
  if(bgSprite<0){
    bgSprite.x = 400

  }
  drawSprites();
}