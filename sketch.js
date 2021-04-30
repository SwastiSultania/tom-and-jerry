var mouse,cat;
var catImage1,catImage2,catImage4;
var mouse1Image,mouse2Image,mouse4Image,garden;
function preload() {
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage4 = loadAnimation("images/cat4.png");
    mouse1Image = loadAnimation("images/mouse1.png");
    mouse2Image = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4Image = loadAnimation("images/mouse4.png");
    garden= loadImage ("images/garden.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("catsleeping",catImage1);
    cat.scale=0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation("mousestanding",mouse1Image);
    mouse.scale=0.15
    //create tom and jerry sprites here

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catlastimage",catImage4);
    cat.x=300;
    cat.scale=0.2;
    cat.changeAnimation("catlastimage");
    mouse.addAnimation("mouselastimage",mouse4Image);
    mouse.changeAnimation("mouselastimage");
}
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catrunning",catImage2);
    cat.changeAnimation("catrunning");
    mouse.addAnimation("mouseteasing",mouse2Image);
    mouse.changeAnimation("mouseteasing");
}
  //For moving and changing animation write code here


}
