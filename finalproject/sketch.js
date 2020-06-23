//building
let panopticon;
let towerroom;
let towerroof;
let instagram;

//spotlight
let cone;
let rot =0;
let rottwo=2;
let spotlight = [];
let angle = 0;

//sprite
let person;
let choice = false;
let loose = false;

//Exit
let door;
let exit;

//win function
let link;

//design
let insta_txt;
let concrete;

function preload(){

  //loading enviroment models
  panopticon = loadModel("Assets/tinker.obj");
  towerroom = loadModel("Assets/towerroom.obj");
  towerroof = loadModel("Assets/towerroof.obj");
  instagram = loadModel("Assets/insttagram.obj");
  cone = loadModel("Assets/cone.obj");
  door = loadModel("Assets/door.obj");
  exit = loadModel("Assets/exit.obj");

  //loading textures
  concrete = loadImage("Assets/texture.png");
  insta_txt = loadImage("Assets/insta_text.jpg");

}

function setup(){
createCanvas(windowWidth, windowHeight,WEBGL);


  //
  // // enable easy cam
  // createEasyCam();
  //
  // // suppress right-click context menu
  // document.oncontextmenu = function() { return false; }

//initialising view
camera(0, 1200, 700, 0, -500, 0, 0, 1, 0);

//creating sprite
person = new sprite(0,70);

//link
link = createA("https://help.instagram.com/139886812848894", "Exit");
link.hide();


}

function draw(){
background(255);


lights();
//ambientLight(100);
//ambientLight(255,255,0,50);

win();

if(loose == false){
  exitp();
  instabuilding();
}



person.display();
person.move();

push();
//rotating spotlight
rotateZ(radians(angle));
angle = angle + 1;

spotlight[0] = new spot(0,330,100,20,300,0);
spotlight[0].display();
pop();





}

class spot{
  constructor(x,y,z,w,l,angle){
    this.x = x; //0
    this.y = y;//300/2-10
    this.z = z; //-20
    this.w = w; //20
    this.l = l; //300
    this.angle = angle;

  }

  display(){
    push();
    //rotateX(radians(45));
    //rotateX(radians(this.angle))
    noStroke();
    translate(this.x, this.y, this.z);
    //fill(255,255,0,100);
    ambientMaterial(255,255,0,100);
    push();
    //translate(0,150,-100);
    rotateX(radians(-45));
    //rotateY(radians(180));
    translate(-this.x,-this.y+170,-170);
    rotateZ(radians(this.angle))
    cylinder(this.w,this.l);
    pop();
    pop();

    this.angle = this.angle -1;


  }



}

class sprite{
  constructor(x,y){
    this.x = x;
    this.y =y;
  }

  display(){

    push();
    noStroke();
    push();
    translate(this.x, this.y,20/2+12);
    //fill(255,255,255);
    fill(254,218,119);
    sphere(20);
    pop();

    push();
    fill(0);
    //fill(0,0,255);
    translate(this.x-6,this.y+10,20/2+24);
    sphere(4);
    pop();

    push();
    fill(0);
    //fill(0,0,255);
    translate(this.x+6,this.y+10,20/2+24);
    sphere(4);
    pop();
    pop();

  }

  move(){
    if(keyIsDown(UP_ARROW)){

      this.y = this.y -2;
    }

    if(keyIsDown(DOWN_ARROW)){

      this.y = this.y +2;
    }

    if(keyIsDown(LEFT_ARROW)){

      this.x = this.x -2;
    }

    if(keyIsDown(RIGHT_ARROW)){

      this.x = this.x +2;
    }
  }

}

function building (){

  push();
  noStroke();
  fill(50);
    //texture(concrete);
  sphere(5000);
  pop();

//background(10);

push();
rot=rot +0.1;
rotateZ(rot);

//plane
  push();
  //fill(255,255,0);
  noStroke();
    //texture(concrete);
    ambientMaterial(100);
  plane(700,700);
  pop();



  push();
  translate(0,-200,0);

  push();
  translate(0,-40,0);


//tower
push();
noStroke();
  // fill(100);
  ambientMaterial(100);
translate(0,250,150/2);
box(80,80,150);
pop();

push();
noStroke();
ambientMaterial(100);
translate(-20,450,120);
scale(5);
model(towerroom);
push();
scale(0.8);
translate(-5,-10,20);
model(towerroof);
pop();
pop();

push();
scale(3);
noStroke();
fill(255);
rotateX(radians(90));
translate(-10,65,-98);
model(instagram);
pop();

pop();



//prison
push();
translate(260,0,0);
rotateY(radians(180));
rotateX(radians(180));
scale(10);
noStroke();
//ambientMaterial(150,100,100);
// //pointLight(250, 250, 250, 100, 100, 30);
// specularMaterial(150);
ambientMaterial(100);
model(panopticon);
pop();

pop();

pop();

}

function instabuilding (){

push();
noStroke();
  texture(insta_txt);
sphere(5000);
pop();

//plane
  push();
  //fill(255,255,0);
  noStroke();
  texture(insta_txt);
    // fill(255,0,0);
  plane(1000,1000);
  pop();



  push();
  translate(0,-200,0);

  push();
  translate(0,-40,0);

//tower
push();
noStroke();
  // fill(100);
    texture(insta_txt);
  // ambientMaterial(100);
translate(0,250,150/2);
box(80,80,150);
pop();

push();
noStroke();
  texture(insta_txt);
// ambientMaterial(100);
translate(-20,450,120);
scale(5);
model(towerroom);
push();
scale(0.8);
translate(-5,-10,20);
model(towerroof);
pop();
pop();

push();
scale(3);
noStroke();
fill(255);
rotateX(radians(90));
translate(-10,65,-98);
model(instagram);
pop();

pop();


//prison
push();
translate(260,0,0);
rotateY(radians(180));
rotateX(radians(180));
scale(10);
noStroke();
  //texture(insta_txt);
ambientMaterial(221,42,123);
// //pointLight(250, 250, 250, 100, 100, 30);
// specularMaterial(150);
model(panopticon);
pop();

pop();



}

function exitp (){


  push();
  scale(0.8);
  translate(-2,496,180);
    rotateX(radians(90));
    noStroke();
    fill(0,255,0);
  model(exit);
  pop();

  push();
  translate(-36,400,0);
  scale(3);
  fill(100);
  noStroke();
    texture(insta_txt);
  //strokeWeight(0.3);
  model(door);
  pop();


}

function win(){
  if(person.x == 0 && person.y == 410 ){
    console.log("door");
    choice = true;
  }

  if(frameCount > 1000 === true  && choice == false){
    console.log("loose");
    loose = true;
    building();
  }else if (choice == true && loose == false){
    console.log("win");
    push();
    fill(255,255,255);
    link.style("font-size: 70px;");
    link.style("text-align: CENTER;")
    link.style("color: #2fff24")
    link.position(windowWidth/2-60,windowHeight - windowHeight/4+50);
    link.show();
    //https://help.instagram.com/
    pop();
  }
}

//To do
// make colour scheme for instabuilding x
//make design document x
// Make video
//choose how long one has until time is out x
