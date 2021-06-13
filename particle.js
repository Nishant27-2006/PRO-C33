class Particle {

    constructor(x,y,r){

var options={
'isStatic':false
}
    this.r = r;   
    this.body = Matter.Bodies.circle(x,y,r,options);
    this.color = color(random(0,255),random(0,255),random(0,255))
    World.add (world,this.body);
    
    }
    
    display(){
    
      var pos = this.body.position;
    push();    
    ellipseMode(CENTER); 
    fill ("red"); 
    ellipse(pos.x,pos.y,this.r,this.r);
    pop();
    }
    
      
    }