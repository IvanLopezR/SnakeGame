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
        this.crash = new Audio(`../music/crash.mp3`);
        this.door = new Audio(`../music/door.mp3`);
        this.eat = new Audio(`../music/eat.mp3`);
        this.ghost = new Audio(`../music/ghost.mp3`);
        this.magic = new Audio(`../music/magic.mp3`);
        this.sleep = new Audio(`../music/sleep.mp3`);
        this.startGame = new Audio(`../music/start.mp3`);
        this.endGame = new Audio(`../music/end.mp3`);
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
        this.startGame.play();
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
                    // this.crash.play();            
                }
            }
            for (let i = 0; i < this.objectsArr.length; i++) {
                if (player.getX() === this.objectsArr[i].getX() && player.getY() === this.objectsArr[i].getY()) {
                    index = i;
                    player.setScore();
                    switch (this.objectsArr[i].getRandom()) {
                        case 0:
                            this.ghost.play();
                            player.setVisibility();
                            break;
                        case 1:
                            this.eat.play();
                            player.moreSpeed();
                            break;
                        case 2:
                            this.door.play();
                            this.drawFramework();
                            this.frame = true;
                            break;
                        case 3:
                            this.magic.play();
                            this.players.forEach((player) => {
                                player.clearX();
                                player.clearY();
                                this.frame = false;
                                this.framework.axisX = [];
                                this.framework.axisY = [];
                            })
                            break;
                        case 4:
                            this.sleep.play();
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
        for (let i = 10; i <= 630; i += 5) {
            this.framework.axisX.push(10);
            this.framework.axisY.push(i);
        }
        for (let i = 10; i <= 630; i += 5) {
            this.framework.axisX.push(950);
            this.framework.axisY.push(i);
        }
        for (let i = 10; i <= 950; i += 5) {
            this.framework.axisX.push(i);
            this.framework.axisY.push(10);
        }
        for (let i = 10; i <= 950; i += 5) {
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
        let winer = "";
        let scoreOnePlayer = 0;
        let indexPlayer=0;
        if(this.totalPlayers===1){
            if(!this.players[0].isLife()){
                clearInterval(this.intervalId);
                scoreOnePlayer = document.getElementById(`score-p1`).innerHTML;
                winer = document.getElementById(`p1`).innerHTML.toUpperCase();
                this.endGame.play();
                alert(`Game Finished! Total score for ${winer}: ${scoreOnePlayer}`);
            }
        }
        else{
            this.players.forEach((player) => {
                if(player.isLife()){
                    life++;
                }
            })
            if(life===1){
                clearInterval(this.intervalId);
                this.players.forEach((player) => {
                    indexPlayer++;
                    if(player.isLife()){
                        life++;
                        winer = document.getElementById(`p${indexPlayer}`).innerHTML.toUpperCase();
                    }
                })
                this.endGame.play();
                alert(`Game finished and ${winer} survived... Congratulations!!!`);
            }
        }
    }

}