var menu = {
    w : 900,
    h : 702,
    fps: 60,
    canvas: undefined,
    ctx: undefined,
    keys:{
        LEFT: 37,
        RIGHT: 39,
    },
}

let pressLeft = document.getElementById("arrowLeft");
let pressRight = document.getElementById("arrowRight");


window.onload = cargar("canvas-id");

function cargar(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.setAttribute("width",menu.w);
    this.canvas.setAttribute("height", menu.h);
}

var snakeLeft = new Snake(ctx,10,1);
var snakeRight = new Snake(ctx,650,2);
var player = new Player(ctx);

function background(){
    var background = new Image();
    background.src = '../img/16148081.png';
    ctx.drawImage(background,0,0);   
    ctx.drawImage(background, menu.w, menu.h, this.width, this.heigth);
}

setInterval(function(){
    clear();
    background();
    snakeLeft.drawSnake();
    snakeRight.drawSnake();
    player.drawPlayer();
},1);

function clear(){
    this.ctx.clearRect(0, 0, this.menu.w, this.menu.h);
}

document.onkeydown = function(event) {
    if (
        event.keyCode === menu.keys.LEFT) {
        document.getElementById("arrowRight").src = "../img/arrowRight.png"; 
        document.getElementById("arrowLeft").src = "../img/arrow-hoverLeft.png"; 
        player.animateImg("left");
    } else if (event.keyCode === menu.keys.RIGHT) {
        document.getElementById("arrowLeft").src = "../img/arrowLeft.png";
        document.getElementById("arrowRight").src = "../img/arrow-hover.png";
        player.animateImg("right");
    }
}.bind(this);

document.onkeyup = function(event){
    if (event.keyCode === menu.keys.LEFT) {
        document.getElementById("arrowLeft").src = "../img/arrowLeft.png";
    } else if (event.keyCode === menu.keys.RIGHT) {
        document.getElementById("arrowRight").src = "../img/arrowRight.png";
    } 
}