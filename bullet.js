var offsetY = 48;
var offsetX = 59;
class bullet{
	constructor(xSpd, ySpd){
    if(xSpd>0){
		this.x = player.currentPos.x+offsetX;
    }else{
      this.x = player.currentPos.x-offsetX;
    }
		this.y = player.currentPos.y+offsetY;
		this.xSpd = 12*xSpd;
		this.ySpd = 12*ySpd;
	}
	display(){
		push()
		stroke(255, 0, 0)
		fill(Math.floor(Math.random()*55+1)+180, 0, 0, 135);
		rect(this.x, this.y, 29, 4); 
		pop();
	}
	
	update(){
		this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.994;
		this.ySpd *= 0.994;
	}
	
	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
	//hitScan(){}
}