class Player1 {
    constructor(ctx) {
      this.x = Math.random()*(939-1)+1;
      this.y = Math.random()*(619-1)+1;
      this.width = 20;
      this.height = 22;
      this.img = new Image();
      this.img.src = "../img/snake-blue1.png";
      this.img2 = new Image();
      this.img2.src = "../img/snake-blue2.png";
      this.img3 = new Image();
      this.img3.src = "../img/snake-blue3.png";
      this.img4 = new Image();
      this.img4.src = "../img/snake-blue4.png";
      this.ctx = ctx;
      this.arr = [this.img,this.img2,this.img3,this.img4];
      this.iniDirection = Math.floor(Math.random()*(4-0));
      this.iniImage = this.arr[this.iniDirection];
      this.speed;
      this.widthBonus;
      this.score = 0;
      this.visibility = true;
      this.life = true;
    }

    drawPlayer(){
    //   if(this.right){
        this.ctx.drawImage(this.iniImage,this.x,this.y,this.width,this.height);
    //   }
    }

    movePlayer(){
        switch(this.iniDirection){
            case 0:
                this.ctx.drawImage(this.arr[iniDirection],this.x,this.y-3,this.width,this.height);
                break;
            case 1:
                this.ctx.drawImage(this.iniImage,this.x+3,this.y,this.width,this.height);
                break;
            case 2:
                this.ctx.drawImage(this.iniImage,this.x,this.y+3,this.width,this.height);
                break;
            case 3:
                this.ctx.drawImage(this.iniImage,this.x-3,this.y,this.width,this.height);
                break;
        }
    }
    //   else{
    //     this.ctx.drawImage(
    //       this.img2,
    //       this.img2.frameIndex * Math.floor(this.width / this.img.frames),
    //       0,
    //       Math.floor(this.width / this.img.frames),
    //       this.height,
    //       this.x,
    //       this.y,
    //       Math.floor(this.width / this.img.frames)+30,
    //       this.height+30
    //     );
    //   }
  
    // animateImg(direction) {
    //   if(direction === "right"){
    //     this.right = true;
    //     this.img.frameIndex += 1;
    //     this.x +=6;
    //     if(this.x > 680){
    //       window.open('../snake/snake.html');
    //     }
    //     if (this.img.frameIndex > 4){
    //       this.img.frameIndex = 0;
    //     }
    //   }
    //   if(direction === "left"){
    //     this.right = false;
    //     this.img2.frameIndex += 1;
    //     this.x -=6;
    //     if(this.x < 130){
    //       window.open('../snake/snake.html');
    //     }
    //     if (this.img2.frameIndex > 6){
    //       this.img2.frameIndex = 2;
    //     }
    //   }
    // }



}

class Player2{
    constructor(ctx) {
        this.x = Math.random()*(939-1)+1;
        this.y = Math.random()*(619-1)+1;
        this.width = 20;
        this.height = 22;
        this.img = new Image();
        this.img.src = "../img/snake-green1.png";
        this.img2 = new Image();
        this.img2.src = "../img/snake-green2.png";
        this.img3 = new Image();
        this.img3.src = "../img/snake-green3.png";
        this.img4 = new Image();
        this.img4.src = "../img/snake-green4.png";
        this.ctx = ctx;
        this.arr = [this.img,this.img2,this.img3,this.img4];
        this.iniDirection = Math.floor(Math.random()*(4-0));;
        this.iniImage = this.arr[this.iniDirection];
        this.speed;
        this.widthBonus;
        this.score = 0;
        this.visibility;
        this.life = true;
      }
  
      drawPlayer(){
        this.ctx.drawImage(this.iniImage,this.x,this.y,this.width,this.height);
      }
}

class Player3{
    constructor(ctx) {
        this.x = Math.random()*(939-1)+1;
        this.y = Math.random()*(619-1)+1;
        this.width = 20;
        this.height = 22;
        this.img = new Image();
        this.img.src = "../img/snake-red1.png";
        this.img2 = new Image();
        this.img2.src = "../img/snake-red2.png";
        this.img3 = new Image();
        this.img3.src = "../img/snake-red3.png";
        this.img4 = new Image();
        this.img4.src = "../img/snake-red4.png";
        this.ctx = ctx;
        this.arr = [this.img,this.img2,this.img3,this.img4];
        this.iniDirection = Math.floor(Math.random()*(4-0));
        this.iniImage = this.arr[this.iniDirection];
        this.speed;
        this.widthBonus;
        this.score = 0;
        this.visibility;
        this.life = true;
      }
  
      drawPlayer(){
        this.ctx.drawImage(this.iniImage,this.x,this.y,this.width,this.height);
      }
}

class Player4{
    constructor(ctx) {
        this.x = Math.random()*(939-1)+1;
        this.y = Math.random()*(619-1)+1;
        this.width = 20;
        this.height = 22;
        this.img = new Image();
        this.img.src = "../img/snake-ye1.png";
        this.img2 = new Image();
        this.img2.src = "../img/snake-ye2.png";
        this.img3 = new Image();
        this.img3.src = "../img/snake-ye3.png";
        this.img4 = new Image();
        this.img4.src = "../img/snake-ye4.png";
        this.ctx = ctx;
        this.arr = [this.img,this.img2,this.img3,this.img4];
        this.iniDirection = Math.floor(Math.random()*(4-0));
        this.iniImage = this.arr[this.iniDirection];
        this.speed;
        this.widthBonus;
        this.score = 0;
        this.visibility;
        this.life = true;
      }
  
      drawPlayer(){
        this.ctx.drawImage(this.iniImage,this.x,this.y,this.width,this.height);
      }
}