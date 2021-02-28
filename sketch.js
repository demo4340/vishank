var backgroundImage, backgroundSprite;

function preload(){

  backgroundImage = loadImage("1.jpg")

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  backgroundSprite = createSprite(displayWidth/2, displayHeight/2);
  backgroundSprite.addImage("scene", backgroundImage);
}

function draw() {
  background("blue");
  
  
  drawSprites();
}