class Game {
    constructor() {
        this.w = 960
        this.h = 640
        this.canvas = undefined
        this.ctx = undefined
        this.fps = 60
        this.intervalId = undefined
        this.background = new Image();
        this.background.src = '../img/ground.jpg';
        this.colors=["blue","green","red","yellow"];
        this.players=[];
        this.controls=[];
        this.arrayTotal = new Array(2);
    }

    init = (players,controls) => {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d");
        this.canvas.setAttribute("width",this.w);
        this.canvas.setAttribute("height", this.h);
        console.log(controls);
        for(let i=0;i<controls.length;i++){
            if(controls[i]!=""){
                this.controls.push(controls[i].toUpperCase().charCodeAt());
            }
        }
        console.log(this.controls);
        for(let i=0; i<players;i++){
            this.players.push(new Players(this.ctx,this.colors[i]));
        }
        this.start()
    }

    start = () => {
        this.intervalId = setInterval(()=>{
            this.clear();
            this.drawAll();
        },15000/this.fps);
        
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }

    drawAll = () => {
        this.drawBackground();
        this.drawPlayers();
    }

    drawPlayers = () => {
        this.players.forEach ((player)=>{
            player.drawTrail();
            if(player.isLife()){
                player.movePlayer();
            }
        })
    }

    drawBackground = () => {
        this.ctx.drawImage(this.background, 0, 0, this.w, this.h);
    }

    drawFramework = () => {
        this.ctx.fillStyle = "#1E1008";
        this.ctx.fillRect(5,5,10,630);
        this.ctx.fillRect(945,5,10,630);
        this.ctx.fillRect(5,5,950,10);
        this.ctx.fillRect(5,625,950,10);
        this.ctx.stroke();
    }

    movePlayer = () => {
        document.onkeydown = function(event) {
            if(this.prueba === event.keyCode) {
                console.log("yeah");
            }
        }      
    }

    addElement = (x,y) => {
        this.arrayTotal[x][y] = 1;
        console.log(arrayTotal[x][y]);
    }
    
}

// document.onkeydown = function(event) {
//     console.log(this.controls);
    // if (
    //     event.keyCode === keys.LEFT) {
    //     document.getElementById("arrowRight").src = "../img/arrowRight.png"; 
    //     document.getElementById("arrowLeft").src = "../img/arrow-hoverLeft.png"; 
    //     player.animateImg("left");
    // } else if (event.keyCode === menu.keys.RIGHT) {
    //     document.getElementById("arrowLeft").src = "../img/arrowLeft.png";
    //     document.getElementById("arrowRight").src = "../img/arrow-hover.png";
    //     player.animateImg("right");
    // }
// }.bind(this);