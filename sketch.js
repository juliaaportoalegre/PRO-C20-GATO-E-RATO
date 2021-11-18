var tom, tomimg;
var jerry, jerryimg;
var fundo, tela;
var tomimg2, jerryimg2, jerryimg3, tomimg3;

function preload() {
    jerryimg = loadAnimation("images/mouse1.png");
    tomimg = loadAnimation("images/cat1.png");
fundo = loadImage("images/garden.png");
tomimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
jerryimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
tomimg3 = loadAnimation("images/cat4.png");
jerryimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    tela = createCanvas(1000,800);
tom = createSprite (400, 600, 50, 50);
tom.addAnimation("gatosentado", tomimg);

jerry = createSprite (200, 600, 50, 50);
jerry.addAnimation("ratosentado", jerryimg);
 jerry.scale = 0.15;
 tom.scale = 0.15;
}

function draw() {

    background(fundo)

if(tom.x - jerry.x<(tom.width / 2 - jerry.width / 2 )){
tom.velocityx = 0;
tom.addAnimation("colisao", tomimg3);
tom.changeAnimation("colisao");
jerry.velocityx = 0;
jerry.addAnimation("colisao2", jerryimg3);
jerry.changeAnimation("colisao2");
tom.scale = 0.2;

}
    drawSprites();
}


function keyPressed(){
    if (keyDown (LEFT_ARROW)){
      jerry.addAnimation("ratoprovocando", jerryimg2);
     jerry.changeAnimation("ratoprovocando");
    jerry.frameDelay = 25;
    tom.velocityx = -5;
    tom.addAnimation("gatoandando", tomimg2);
    tom.changeAnimation("gatoandando");
    }
}
