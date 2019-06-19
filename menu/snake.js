class Snake{
    constructor(ctx,position,img){
        this.x = position;
        this.y = 405;
        this.width = 250;
        this.heigth = 150;
        this.img = new Image();
        this.img.src = `../img/snake${img}.png`;        
        this.ctx = ctx;
    }
    
    drawSnake(){
        this.ctx.drawImage(this.img,this.x, this.y, this.width, this.heigth);
    }
}
