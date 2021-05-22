var lumberjack, lumberjackanimation;
var tree1, tree2, tree3;
var tree, treeGroup;
var score = 0; 

function preload(){
  lumberjackanimation=loadAnimation("lumberjack1.png","lumberjack2.png");
  //lumberjack2_img = loadImage("lumberjack2.png");
  tree1 = loadImage("tree1.png");
  tree2 = loadImage("tree2.png");
  tree3 = loadImage("tree3.png");
  forest_img = loadImage("forest.png");
}

function setup() {
  createCanvas(1000, 500);
  /*
  tree1 = createSprite(300,400);
  tree1.addImage("tree1",tree1_img);
  tree1.scale = 0.5;
  tree2 = createSprite(600,400);
  tree2.addImage("tree2",tree2_img);
  tree2.scale = 0.5;
  tree3 = createSprite(100,400);
  tree3.addImage("tree3",tree3_img);
  tree3.scale = 0.5;
  */
  lumberjack = createSprite(500,200)
  lumberjack.addAnimation("lumberjackanimation",lumberjackanimation)
  lumberjack.scale = 0.3;
  treeGroup = createGroup();
}

function draw() {
  background(forest_img);
  
  if(keyDown("UP_ARROW")){
    lumberjack.y = lumberjack.y - 5;
  }
  if(keyDown("DOWN_ARROW")){
    lumberjack.y = lumberjack.y + 5;
  }
  if(keyDown("RIGHT_ARROW")){
    lumberjack.x = lumberjack.x + 5;
  }
  if(keyDown("LEFT_ARROW")){
    lumberjack.x = lumberjack.x - 5;
  }
  spawnTrees();
  if(treeGroup.isTouching(lumberjack)&&keyDown("SPACE")){
    treeGroup.destroyEach();
    score = score+2;
  }
  drawSprites();
  textSize(30);
  stroke("aqua");
  text("Score: "+score,50,30);
  
}

function spawnTrees(){
  if(frameCount%120===0){
     var tree = createSprite(400,165,10,40);
     tree.x = Math.round(random(10,900));
     tree.y = Math.round(random(10,400));
     var rand = Math.round(random(1,3));
     switch(rand){
       case 1:tree.addImage(tree1);
       break;
       case 2:tree.addImage(tree2);
       break;
       case 3:tree.addImage(tree3);
       break;     
       default:break;
     }
    tree.scale = 0.5;
    treeGroup.add(tree);
  }
}
