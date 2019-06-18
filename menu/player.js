class Player {
    constructor(ctx) {
      this.x = 420;
      this.y = 500;
      this.width = 245;
      this.height = 28;
      this.img = new Image();
      this.img.src = "../img/CharmanderRight.png";
      this.img2 = new Image();
      this.img2.src = "../img/CharmanderLeft.png";
      this.ctx = ctx;
      this.img.frames = 8;
      this.img.frameIndex = 0;
      this.img2.frameIndex = 1;
      this.right = true;
    }

    drawPlayer(){
      if(this.right){
        this.ctx.drawImage(
          this.img,
          this.img.frameIndex * Math.floor(this.width / this.img.frames),
          0,
          Math.floor(this.width / this.img.frames),
          this.height,
          this.x,
          this.y,
          Math.floor(this.width / this.img.frames)+30,
          this.height+30
        );
      }
      else{
        this.ctx.drawImage(
          this.img2,
          this.img2.frameIndex * Math.floor(this.width / this.img.frames),
          0,
          Math.floor(this.width / this.img.frames),
          this.height,
          this.x,
          this.y,
          Math.floor(this.width / this.img.frames)+30,
          this.height+30
        );
      }
    }
  
    animateImg(direction) {
      if(direction === "right"){
        this.right = true;
        this.img.frameIndex += 1;
        this.x +=6;
        if(this.x > 680){
          window.open('../snake/snake.html');
        }
        if (this.img.frameIndex > 4){
          this.img.frameIndex = 0;
        }
      }
      if(direction === "left"){
        this.right = false;
        this.img2.frameIndex += 1;
        this.x -=6;
        if(this.x < 130){
          window.open('../snake/snake.html');
        }
        if (this.img2.frameIndex > 6){
          this.img2.frameIndex = 2;
        }
      }
    }
  
}