var path, boy, leftBoundary,rightBoundary;
var pathImg, boyImg, sodaImg, coinImg, bombImg;
var coin, bomb, soda;

function preload(){
pathImg=loadImage('path.png');
boyImg=loadAnimation('jakeWalking1.png', 'jakeWalking2.png', 'jake2.png', 'jake3.png');
coinImg=loadImage('coin.png');
bombImg=loadImage('bomb.png');
}

function setup(){
createCanvas(1400, 758);
path=createSprite(700, 350, 80, 10);
path.addImage('Path image', pathImg);
path.scale=2;

boy=createSprite(700, 600);
boy.addAnimation('boy walking', boyImg);
boy.scale=0.8;

leftBoundary=createSprite(210,400,400, 800);
leftBoundary.visible=false;

rightBoundary=createSprite(1200,400,400,800);
rightBoundary.visible=false;
}

function draw() {
background('black');
path.velocityY=4;

boy.x=World.mouseX;
  
edges=createEdgeSprites();
boy.collide(edges[3]);
boy.collide(rightBoundary);
boy.collide(leftBoundary);


if(path.y > 758 ){
path.y = height/3;
}
 
drawSprites();
}
