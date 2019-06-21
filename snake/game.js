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
        this.colors = ["blue", "green", "red", "yellow"];
        this.players = [];
        this.totalPlayers = 0;
        this.playersDead = 0;
        this.controls = [];
        this.framework = {
            axisX: [],
            axisY: []
        };
        this.cont = 0;
        this.objectsArr = [];
        this.frame = false;
        this.times = 0;
    }

    init = (players, controls) => {
        this.totalPlayers = players;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.setAttribute("width", this.w);
        this.canvas.setAttribute("height", this.h);
        for (let i = 0; i < controls.length; i++) {
            if (controls[i] != "") {
                this.controls.push(controls[i].toUpperCase().charCodeAt());
            }
        }
        for (let i = 0; i < players; i++) {
            this.players.push(new Players(this.ctx, this.colors[i]));
            this.players[i].addControls(this.controls[i * 2], this.controls[i * 2 + 1]);
        }
        this.start()
    }

    start = () => {
        this.drawAll();
        setTimeout(() => {
            this.intervalId = setInterval(() => {
                this.clear();
                this.drawAll();
                if (this.cont > 30) {
                    this.objectRandom();
                    this.cont = 0;
                }
                this.cont++;
                this.movePlayer()
                this.finish();
            }, 15000 / this.fps);
        }, 2000)
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }

    drawAll = () => {
        this.drawBackground();
        this.drawPlayers();
        this.drawObjects();
        this.drawScore();
        if (this.frame) {
            this.drawFramework();
        }
    }

    drawScore() {
        let ind = 1;
        this.players.forEach((player) => {
            document.getElementById(`score-p${ind}`).innerHTML = player.getScore();
            ind++;
        })
    }

    objectRandom = () => {
        this.objectsArr.push(new Objects(this.ctx));
    }

    drawPlayers = () => {
        let index;
        let allVisitedPositions = {
            axisX: [],
            axisY: []
        };
        allVisitedPositions.axisX = allVisitedPositions.axisX.concat(this.framework.axisX);
        allVisitedPositions.axisY = allVisitedPositions.axisY.concat(this.framework.axisY);

        this.players.forEach((player) => {
            allVisitedPositions.axisX = allVisitedPositions.axisX.concat(player.getArrayX());
            allVisitedPositions.axisY = allVisitedPositions.axisY.concat(player.getArrayY());
        })

        this.players.forEach((player) => {
            if(!player.getVisibility()){
                this.times++;
                if(this.times===3){
                    player.drawTrail();
                    this.times=0;    
                }
            }
            else{
                player.drawTrail();
            }
            player.movePlayer();
            for (let i = 0; i <= allVisitedPositions.axisX.length; i++) {
                if (player.getX() === allVisitedPositions.axisX[i] && player.getY() === allVisitedPositions.axisY[i] && player.getVisibility()) {
                    player.dead();                  
                }
            }
            for (let i = 0; i < this.objectsArr.length; i++) {
                if (player.getX() === this.objectsArr[i].getX() && player.getY() === this.objectsArr[i].getY()) {
                    index = i;
                    player.setScore();
                    switch (this.objectsArr[i].getRandom()) {
                        case 0:
                            player.setVisibility();
                            break;
                        case 1:
                            player.moreSpeed();
                            break;
                        case 2:
                            this.drawFramework();
                            this.frame = true;
                            break;
                        case 3:
                            this.players.forEach((player) => {
                                player.clearX();
                                player.clearY();
                                this.frame = false;
                                this.framework.axisX = [];
                                this.framework.axisY = [];
                            })
                            break;
                        case 4:
                            player.lessSpeed();
                            break;
                    }
                    this.clearObject(index);
                }
            }
        })
    }

    drawBackground = () => {
        this.ctx.drawImage(this.background, 0, 0, this.w, this.h);
    }

    drawFramework = () => {
        this.ctx.fillStyle = "#1E1008";
        this.ctx.fillRect(5, 5, 10, 630);
        this.ctx.fillRect(945, 5, 10, 630);
        this.ctx.fillRect(5, 5, 950, 10);
        this.ctx.fillRect(5, 625, 950, 10);
        for (let i = 10; i <= 630; i += 10) {
            this.framework.axisX.push(10);
            this.framework.axisY.push(i);
        }
        for (let i = 10; i <= 630; i += 10) {
            this.framework.axisX.push(950);
            this.framework.axisY.push(i);
        }
        for (let i = 10; i <= 950; i += 10) {
            this.framework.axisX.push(i);
            this.framework.axisY.push(10);
        }
        for (let i = 10; i <= 950; i += 10) {
            this.framework.axisX.push(i);
            this.framework.axisY.push(630);
        }
        this.ctx.stroke();
    }

    drawObjects = () => {
        this.objectsArr.forEach((object) => {
            object.drawObject()
        })
    }

    clearObject(index) {
        this.objectsArr.splice(index, 1)
    }

    movePlayer = () => {
        document.onkeydown = (event) => {
            this.players.forEach((player) => {
                if (player.containControl(event.keyCode)) {
                    if (player.controlLeft(event.keyCode)) {
                        player.changeDirection(true);
                    }
                    else {
                        player.changeDirection(false);
                    }
                }
            })
        }
    }

    finish(){
        let life=0;
        this.players.forEach((player) => {
            if(player.isLife()){
                life++;
            }
        })
        if(life===0){
            clearInterval(this.intervalId);
            alert("Game Finished!");
        }
    }

}