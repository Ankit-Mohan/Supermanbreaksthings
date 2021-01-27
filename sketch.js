const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function preload() {
Backgroundim = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(700,600,2000,25);
  Hero1 = new Hero(500,400,400,200);
  sling1 = new Rope(Hero1.body,{x:400,y:200});
  monster1 = new monster(1500,500,300,300)
  box1 = new Box(1000,500,50,50);
  box2 = new Box(950,500,50,50);
  box3 = new Box(900,500,50,50);
  box4 = new Box(850,500,50,50);
  box5 = new Box(800,500,50,50);
  box6 = new Box(750,500,50,50);
  box7 = new Box(1000,450,50,50);
  box8 = new Box(950,450,50,50);
  box9 = new Box(900,450,50,50);
  box10= new Box(850,450,50,50);
  box11= new Box(800,450,50,50);
  box12= new Box(750,450,50,50);
  box13= new Box(1000,400,50,50);
  box14= new Box(950,400,50,50);
  box15= new Box(900,400,50,50);
  box16= new Box(850,400,50,50);
  box17= new Box(800,400,50,50);
  box18= new Box(750,400,50,50);
  box19= new Box(1000,350,50,50);
  box20= new Box(950,350,50,50);
  box21= new Box(900,350,50,50);
  box22= new Box(850,350,50,50);
  box23= new Box(800,350,50,50);
  box24= new Box(750,350,50,50);
  box25= new Box(1000,300,50,50);
  box26= new Box(950,300,50,50);
  box27= new Box(900,300,50,50);
  box28= new Box(850,300,50,50);
  box29= new Box(800,300,50,50);
  box30= new Box(750,300,50,50);
  box31= new Box(1000,250,50,50);
  box32= new Box(950,250,50,50);
  box33= new Box(900,250,50,50);
  box34= new Box(850,250,50,50);
  box35= new Box(800,250,50,50);
  box36= new Box(750,250,50,50);
  box37= new Box(1000,200,50,50);
  box38= new Box(950,200,50,50);
  box39= new Box(900,200,50,50);
  box40= new Box(850,200,50,50);
  box41= new Box(800,200,50,50);
  box42= new Box(750,200,50,50);
  box43= new Box(1000,150,50,50);
  box44= new Box(950,150,50,50);
  box45= new Box(900,150,50,50);
  box46= new Box(850,150,50,50);
  box47= new Box(800,150,50,50);
  box48= new Box(750,150,50,50);
  World.add(world,Hero1);
}

function draw() {
  background(Backgroundim);
  ground1.display();
  Hero1.display();
  sling1.display();
 monster1.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 box26.display();
 box27.display();
 box28.display();
 box29.display();
 box30.display();
 box31.display();
 box32.display();
 box33.display();
 box34.display();
 box35.display();
 box36.display();
 box37.display();
 box38.display();
 box39.display();
 box40.display();
 box41.display();
 box42.display();
 box43.display();
 box44.display();
 box45.display();
 box46.display();
 box47.display();
 box48.display();
  Engine.update(engine);
}


function mouseDragged(){
      Matter.Body.setPosition(Hero1.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(Hero1.body,{x:200, y:50});
     sling1.attach(Hero1.body);
  }
}
