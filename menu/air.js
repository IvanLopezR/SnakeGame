class Air{
    constructor(ctx){
        this.x = 670;
        this.y = 460;
        this.width = 180;
        this.heigth = 120;
        this.img = new Image();
        this.img.src = '../img/air.png';
        this.ctx = ctx;
    }
    
    drawAir(){
        this.ctx.drawImage(this.img,this.x, this.y, this.width, this.heigth);
    }
}
