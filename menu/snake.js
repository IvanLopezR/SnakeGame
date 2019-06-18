class Snake{
    constructor(ctx){
        this.x = 10;
        this.y = 410;
        this.width = 250;
        this.heigth = 150;
        this.img = new Image();
        this.img.src = '../img/snake.png';
        this.ctx = ctx;
    }
    
    drawSnake(){
        this.ctx.drawImage(this.img,this.x, this.y, this.width, this.heigth);
    }
}
