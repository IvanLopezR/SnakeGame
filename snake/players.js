const PI = Math.PI;
const PI_DOUBLE = 2 * Math.PI;

class Players {
    constructor(ctx, color) {
        this.color = color;
        this.x = Math.floor(Math.random() * (94-10)+10) * 10;
        this.y = Math.floor(Math.random() * (62-10)+10) * 10;
        this.width = 20;
        this.height = 22;
        this.img = new Image();
        this.ctx = ctx;
        this.direction = Math.floor(Math.random() * (5 - 1) + 1);
        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
        this.speed = 10;
        this.score = 0;
        this.visibility = true;
        this.life = true;
        this.controls = [];
        this.visitedPositions = {
            axisX: [this.x],
            axisY: [this.y]
        };
        this.advance = 10;
    }

    drawPlayer() {
        this.ctx.drawImage(this.img, this.x - this.width / 2, this.y - this.width / 2, this.width, this.height);
    }

    movePlayer() {
        if (this.isLife()) {
            switch (this.direction) {
                case 1:
                    this.y -= this.speed;
                    if (this.y < 0) {
                        this.y = 640;
                    }
                    this.drawPlayer();
                    this.visitedPositions.axisX.push(this.x);
                    this.visitedPositions.axisY.push(this.y);
                    break;
                case 2:
                    this.x += this.speed;
                    if (this.x > 960) {
                        this.x = 0;
                    }
                    this.drawPlayer();
                    this.visitedPositions.axisX.push(this.x);
                    this.visitedPositions.axisY.push(this.y);
                    break;
                case 3:
                    this.y += this.speed;
                    if (this.y > 640) {
                        this.y = 0;
                    }
                    this.drawPlayer();
                    this.visitedPositions.axisX.push(this.x);
                    this.visitedPositions.axisY.push(this.y);
                    break;
                case 4:
                    this.x -= this.speed;
                    if (this.x < 0) {
                        this.x = 960;
                    }
                    this.drawPlayer();
                    this.visitedPositions.axisX.push(this.x);
                    this.visitedPositions.axisY.push(this.y);
                    break;
            }
        }
    }

    changeDirection(giro) {
        if (this.isLife()) {
            switch (this.direction) {
                case 1:
                    if (!giro) {
                        this.direction += 1;
                        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
                    }
                    else {
                        this.direction = 4;
                        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
                    }
                    break;
                case 2:
                    if (!giro) {
                        this.direction += 1;
                        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
                    }
                    else {
                        this.direction -= 1;
                        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
                    }
                    break;
                case 3:
                    if (!giro) {
                        this.direction += 1;
                        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
                    }
                    else {
                        this.direction -= 1;
                        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
                    }
                    break;
                case 4:
                    if (!giro) {
                        this.direction = 1;
                        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
                    }
                    else {
                        this.direction -= 1;
                        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
                    }
                    break;
            }
        }
    }

    drawTrail() {
        for (let i = 0; i < this.visitedPositions.axisX.length; i++) {
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.arc(this.visitedPositions.axisX[i], this.visitedPositions.axisY[i], this.advance / 2, 0, PI_DOUBLE);
            this.ctx.fill();
            this.ctx.closePath();
        }
    }

    isLife() {
        return this.life;
    }

    dead(){
        this.life = false;
    }

    setVisibility() {
        this.visibility = false;
        setTimeout(() => {
            this.visibility = true;
        }, 12000)
    }

    getVisibility(){
        return this.visibility;
    }

    moreSpeed(){
        this.speed=20;
        setTimeout(() => {
            this.speed = 10;
        }, 8000)
    }

    lessSpeed(){
        this.speed = 5;
        setTimeout(() => {
            let auxX = this.x.toString();
            let auxY = this.y.toString();
            if(auxX[auxX.length-1]==="5"){
                this.x+=5;
            }
            if(auxY[auxY.length-1]==="5"){
                this.y+=5;
            }
            this.speed = 10;
        }, 8000)
    }

    setScore(){
        this.score += 500;
    }

    getScore(){
        return this.score;
    }

    addControls(left, right) {
        this.controls.push(left);
        this.controls.push(right);
    }

    containControl(control) {
        if (this.controls.includes(control)) {
            return true;
        }
    }

    controlLeft(control) {
        if (this.controls[0] === control) {
            return true;
        }
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    clearX(){
        this.visitedPositions.axisX = [];
    }

    clearY(){
        this.visitedPositions.axisY = [];
    }

    lengthArray(){
        return this.visitedPositions.axisX.length;
    }

    getArrayX(){
        return this.visitedPositions.axisX;
    }

    getArrayY(){
        return this.visitedPositions.axisY;
    }

}