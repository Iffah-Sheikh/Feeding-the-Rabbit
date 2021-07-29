var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png","leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.x = World.mouseX;
  rabbit.collide(edges);

  /*if(frameCount % 75 === 0){
    if (select_sprites == 1) {
      createApples();
    }
    else{
      createLeaves();
    }
  } */
  createApples();
  createLeaves();

  drawSprites();
}

function createApples() {
  if(frameCount % 75 === 0) {
    apple = createSprite(200,0,10,10);
    apple.velocityY = 3;
    apple.addImage(appleImg);
    apple.scale = 0.1;

    var rand = Math.round(random(20,370));

    apple.x = rand;

    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
  }
}

function createLeaves() {
  if(frameCount % 75 === 0) {
    leaves = createSprite(200,0,10,10);
    leaves.velocityY = 2;
    leaves.addImage(leavesImg);
    leaves.scale = 0.1;

    var rand1 = Math.round(random(20,370)); 

    leaves.x = rand1;

    leaves.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
  }
}