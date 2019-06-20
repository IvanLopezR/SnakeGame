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
        this.framework = {
            axisX: [],
            axisY: []
        };
        this.cont = 0;
        this.objectsArr = []
    }

    init = (players,controls) => {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d");
        this.canvas.setAttribute("width",this.w);
        this.canvas.setAttribute("height", this.h);
        for(let i=0;i<controls.length;i++){
            if(controls[i]!=""){
                this.controls.push(controls[i].toUpperCase().charCodeAt());
            }
        }
        for(let i=0; i<players;i++){
            this.players.push(new Players(this.ctx,this.colors[i]));
            this.players[i].addControls(this.controls[i*2],this.controls[i*2+1]);
        }
            this.start()
    }

    start = () => {
        this.drawAll();
        setTimeout(()=>{
            this.intervalId = setInterval(()=>{
            this.clear();
            this.drawAll();
            if(this.cont>30){
                this.objectRandom();
                this.cont=0;
            }
            this.cont++;
            this.movePlayer()
        },15000/this.fps);
        },2000)
        
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }

    drawAll = () => {
        this.drawBackground();
        this.drawPlayers();
        this.drawFramework();
        this.drawObjects();
    }

    objectRandom = () => {
        this.objectsArr.push(new Objects(this.ctx));
        
    }

    drawPlayers = () => {
        let allVisitedPositions = {
            axisX: [],
            axisY: []
        };
        allVisitedPositions.axisX = allVisitedPositions.axisX.concat(this.framework.axisX);
        allVisitedPositions.axisY = allVisitedPositions.axisY.concat(this.framework.axisY);

        this.players.forEach ((player)=>{
            allVisitedPositions.axisX = allVisitedPositions.axisX.concat(player.getArrayX());
            allVisitedPositions.axisY = allVisitedPositions.axisY.concat(player.getArrayY());
        })

        this.players.forEach ((player)=>{
            player.drawTrail();
            player.movePlayer();
            for(let i=0;i<=allVisitedPositions.axisX.length;i++){
                if(player.getX()===allVisitedPositions.axisX[i] && player.getY()===allVisitedPositions.axisY[i]){
                    player.dead();
                }
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
        for(let i=10;i<=630;i+=10){
            this.framework.axisX.push(10);
            this.framework.axisY.push(i);
        }
        for(let i=10;i<=630;i+=10){
            this.framework.axisX.push(950);
            this.framework.axisY.push(i);
        }
        for(let i=10;i<=950;i+=10){
            this.framework.axisX.push(i);
            this.framework.axisY.push(10);
        }
        for(let i=10;i<=950;i+=10){
            this.framework.axisX.push(i);
            this.framework.axisY.push(630);
        }
        this.ctx.stroke();
    }

    drawObjects = ()=>{
        this.objectsArr.forEach((object,index)=>{
            object.drawObject()
            // this.objectsArr.splice(index,1)
        })
    }

    movePlayer = () => {
        document.onkeydown = (event) =>{
            this.players.forEach ((player)=>{
                if(player.containControl(event.keyCode)){
                    if(player.controlLeft(event.keyCode)){
                        player.changeDirection(true);
                    }
                    else{
                        player.changeDirection(false);
                    }
                }
            })
        }      
    }

}