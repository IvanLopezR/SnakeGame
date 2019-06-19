class Players{
    constructor(ctx, color) {
        this.color = color
        this.x = Math.random()*((47-1)+1)*20;
        this.y = Math.random()*((31-1)+1)*20;
        this.width = 20;
        this.height = 22;
        this.img = new Image();
        this.ctx = ctx;
        this.direction = Math.floor(Math.random()*(5-1)+1);
        this.img.src = `../img/snake-${this.color}${this.direction}.png`;
        this.speed;
        this.widthBonus;
        this.score = 0;
        this.visibility = true;
        this.life = true;
      }
  
      drawPlayer(){
        this.ctx.drawImage(this.img.src,this.x,this.y,this.width,this.height);
      }

      movePlayer(){
        switch(this.direction){
            case 0:
                this.ctx.drawImage(this.img.src,this.x,this.y-20,this.width,this.height);
                break;
            case 1:
                this.ctx.drawImage(this.img.src,this.x+20,this.y,this.width,this.height);
                break;
            case 2:
                this.ctx.drawImage(this.img.src,this.x,this.y+20,this.width,this.height);
                break;
            case 3:
                this.ctx.drawImage(this.img.src,this.x-20,this.y,this.width,this.height);
                break;
        }
    }

    changeDirection(giro){
        switch(this.direction){
            case 1:
                if(giro === "r"){
                    this.direction+=1;
                }
                else{
                    this.direction=4;
                }
                break;
            case 2:
                if(giro === "r"){
                    this.direction+=1;
                }
                else{
                    this.direction-=1;
                }
                break;
            case 3:
                if(giro === "r"){
                    this.direction+=1;
                }
                else{
                    this.direction-=1;
                }
                break;
            case 4:
                if(giro === "r"){
                    this.direction=1;
                }
                else{
                    this.direction-=1;
                }
                break;
        }
    }

    dead(){
        this.life = false;
    }

    visibility(){
        this.visibility = false;
    }

    score(type){
        if(type==="normal"){
            this.score+=100;
        }
        else{
            this.score+=500;
        }
    }

}