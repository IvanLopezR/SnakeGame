class Objects{
    constructor(ctx){
        this.x = Math.floor(Math.random() * ((47 - 1) + 1)) * 10;
        this.y = Math.floor(Math.random() * ((31 - 1) + 1)) * 10;
        this.width = 30;
        this.height = 30;
        this.ctx = ctx;
        this.img = new Image();
        this.arrayObjects = ['../img/gaysper.png','../img/rat.png','../img/hand-draw.png','../img/star.png','../img/weed.png'];
        this.rndm = Math.floor(Math.random() * (6 - 1));
    }

    drawObject(){
        this.img.src = this.arrayObjects[this.rndm];
        this.ctx.drawImage(this.img, this.x - this.width / 2, this.y - this.width / 2, this.width, this.height);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getRandom(){
        return this.rndm;
    }

}