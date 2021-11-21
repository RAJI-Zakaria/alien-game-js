const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

const Keys = [];

const player = {
    x:0,
    y:0,
    width:32,
    height:54,
    frameX:0,
    frameY:0,
    speed: 9,
    moving: false
};



const playerSprite = new Image();
playerSprite.src= "assets/characters/aladdin_32x54.png";

const background = new Image();
background.src= "assets/characters/background.png";

function drawSprite(img, sX, SY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, SY, sW, sH, dX, dY, dW, dH);
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    drawSprite(playerSprite, 0, 0, player.width, player.height, 0,0, player.width, player.height);
    movePlayer();
    requestAnimationFrame(animate);
     
}
animate();

window.addEventListener("keydown", function(e){
    Keys[e.key] = true;
});

window.addEventListener("keyup", function(e){
    delete Keys[e.key];
});

function movePlayer(){
    if(Keys['ArrowUp']){
        player.y +=player.speed;
        player.frameY=3;
    }
     
}