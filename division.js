class Division{

constructor(x,y,w,h){

var options={

'isStatic':true,
'friction':1.2


}
this.body = Matter.Bodies.rectangle(x,y,w,h,options);
this.w = w;
this.h = h;
World.add (world,this.body);

}  
    
display(){

var pos = this.body.position;
push();    
rectMode(CENTER);
fill("blue");
rect(pos.x,pos.y,this.w,this.h);
pop();

}



}