function setup() {
  createCanvas(450, 400);

  //create sprite for flag stripes using function by passing parameters of x position and color
function createSprites(x,blockColor){
  var stripe = createSprite(x,200,75,150);
  stripe.shapeColor = blockColor;
}
  //Stripe 1 : x-position : 140, color : "blue"
createSprites(140,"blue");
  //Stripe 1 : x-position : 215, color : "white"
createSprites(215,"white");
  //Stripe 1 : x-position : 290, color : "red"
  createSprites(290,"red");
}

function draw() {
  background("honeydew");
  drawSprites();
}
