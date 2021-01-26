var tom,jerry;
var tomSitAnimation,jerryStandAnimation;
var tomWalkAnimation,jerryDanceAnimation;
var tomCollided,jerryCollided;
var bg;



function preload() {
    bg=loadImage("images/garden.png");
    tomSitAnimation=loadAnimation("images/cat1.png");
    jerryStandAnimation=loadAnimation("images/mouse1.png");
    tomWalkAnimation=loadAnimation("images/cat2.png","images/cat3.png");
    jerryDanceAnimation=loadAnimation("images/mouse2.png","images/mouse3.png");
    tomCollided=loadAnimation("images/cat4.png");
    jerryCollided=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom=createSprite(870,600,10,10);
    tom.addAnimation("tomSleeping",tomSitAnimation);
    tom.addAnimation("tomWalking",tomWalkAnimation);
    tom.addAnimation("tomcollide", tomCollided);
    tom.scale=0.2;

    jerry=createSprite(200,600,10,10);
    jerry.addAnimation("jerryStanding",jerryStandAnimation);
    jerry.addAnimation("jerryDancing",jerryDanceAnimation);
    jerry.addAnimation("jerrycollide",jerryCollided);
    jerry.scale=0.15;
    


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX=0;
        tom.changeAnimation("tomcollide", tomCollided);
        tom.x=300;
        jerry.changeAnimation("jerrycollide",jerryCollided);
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.changeAnimation("tomWalking",tomWalkAnimation);

        jerry.changeAnimation("jerryDancing",jerryDanceAnimation);
    }




}


