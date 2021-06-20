var iss,spacecraft;
var hasDocked = false;

function preload(){
  backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
  issImg = loadImage("Docking-undocking/iss.png");
  spacecraftImg = loadAnimation("Docking-undocking/spacecraft1.png");
  spacecraft_up_Img = loadAnimation("Docking-undocking/spacecraft2.png");
  spacecraft_left_Img = loadAnimation("Docking-undocking/spacecraft4.png");
  spacecraft_right_Img = loadAnimation("Docking-undocking/spacecraft3.png");
}

function setup() {
  createCanvas(800,550);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.8;

  spacecraft = createSprite(random(100,500),500,10,10);
  spacecraft.addAnimation("normalSpacecraftImg",spacecraftImg);
  spacecraft.scale = 0.2;
  spacecraft.addAnimation("upSpacecraftImg",spacecraft_up_Img);
  spacecraft.addAnimation("leftSpacecraftImg",spacecraft_left_Img);
  spacecraft.addAnimation("rightSpacecraftImg",spacecraft_right_Img);

  invisiblewall = createSprite(350,225,1,5);
  invisiblewall.visible = false;

}

function draw() {
  background(backgroundImg);
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){

      spacecraft.changeAnimation("leftSpacecraftImg");
      spacecraft.x = spacecraft.x - 5;

    }else if(keyDown(RIGHT_ARROW)){

      spacecraft.changeAnimation("rightSpacecraftImg");
      spacecraft.x = spacecraft.x + 5;

    }else if(keyDown(UP_ARROW)){

      spacecraft.changeAnimation("upSpacecraftImg");
      spacecraft.y = spacecraft.y - 5;

    }else{

      spacecraft.changeAnimation("normalSpacecraftImg");

    }
    if(invisiblewall.isTouching(spacecraft)){
      hasDocked = true;
    }
  }
  if(hasDocked === true){
    textSize(20);
    fill("white")
    text("Docking Successfull!",330,500)
  }
  drawSprites();
}