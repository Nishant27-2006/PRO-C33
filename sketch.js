const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var render;

var plinkoarray = [];
var plinko;

var particlearray = [];
var particle;

var divisionarray = [];
var division1;

function setup() {
 
   createCanvas(1200,800);

  engine = Engine.create();
	world = engine.world;

//Creating ground  
 ground = new Ground(240,800,2500,10);

//Creating the particle 
  particle = new Particle(250,100,20);

//creating many particles  
if(frameCount%60===0){
    partcile = new Particle(random(width/2-10,width/2+10),20);
 }

//creating plinko
plinko = new Plinko(160,250,20);

//pushing it to an array
plinkoarray.push(plinko);

//Creating for loops to create plinko

  for(var i=0;i<width;i=i+80){
plinkoarray.push(new Plinko(i,250,20)) 
  }

  for(var i=0;i<width;i=i+80){
plinkoarray.push(new Plinko(i,180,20))
  }
  
   for(var i=0;i<width;i=i+80){
plinkoarray.push(new Plinko(i,110,20))
    }


division1 = new Division(0,550,10,500);
divisionarray.push(division1);

//Creating loop to create division
for(var i=0;i<width;i=i+100){

  divisionarray.push(new Division(i,550,10,500))
}

//Creating render to view the physics body
render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 400, wireframes: false } });
   
Engine.run(engine);

}

function draw() {
   background(0);

   //Displaying the ground  
      ground.display();

   //Render.run(render);

  //Displaying the particles
  particle.display();

   //Displaying the plinkos
      for(var i = 0;i<plinkoarray.length;i++){

      plinkoarray[i].display();

      }

   //Displaying the divisions
      for(var i = 0;i<divisionarray.length;i++){

      divisionarray[i].display();

       }

  drawSprites();
}