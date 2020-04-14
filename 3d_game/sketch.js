let houseboxone = [];
let facade;
let xpos =0;
let ypos = 0;
let y_increase = 0;
let x_increase = 0;
let z_increase = 51;
let pos_x = 0;
let pos_y = 0;
let instructions;


function preload(){
  instructions = loadModel('assets/tinker.obj', true);
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  facade = loadImage("assets/texture.jpeg");

  // enable easy cam
  createEasyCam();

  // suppress right-click context menu
  document.oncontextmenu = function() { return false; }

  //first vuilding block
  houseboxone.push(new housebox(0, 0,51));
}

function draw(){
  background(135,219,222);
  lights();

  //instructions
  push();
  rotateX(radians(90));
  noStroke();
  fill(255);
  translate(-140,70,240);
  model(instructions);
  pop();


  //calling of building blocks
  push();
  for (var i = 0; i < houseboxone.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    houseboxone[i].display();
  }
  pop();


  //creation of building plane
  push();
  noStroke();
  fill(139,199,167);
  plane(500, 500);
  pop();

  //placement box
  push();
  translate(xpos+x_increase,ypos+y_increase,52+z_increase);
  fill(255,0,0,50);
  box(100,100,2);
  pop();


}

class housebox {
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.h = 100;
    this.d = 100;
    this.w = 100;
    // this.y_pos = 0;
    // this.x_pos = 0;
  }



  display() {
    push();
    translate(this.x,this.y,this.z);
    //texture(facade);
    box(this.w, this.h, this.d);
    rotateX(radians(90));
    translate(10,0,-52);
    fill(96, 202, 247);
    box(40,60,2);
    translate(10,0,104);
    box(40,60,2);
    pop();
  }
}

function keyPressed() {

// change of position x axis
if(x_increase > -200 == true){
  if (keyCode === LEFT_ARROW) {
    x_increase = x_increase-100;


//problem with translation tracking
    // pos_x=xpos;
    // pos_x=xpos+x_increase;
    // console.log("x_increase=", x_increase);
    // console.log("y_increase=", y_increase);
    // console.log("pos_x=", pos_x);
    // console.log("pos_y=", pos_y);
  }
  }

// change of position x axis
if(x_increase < 200 == true){
  if (keyCode === RIGHT_ARROW) {
    x_increase = x_increase+100;

//problem with translation tracking
    // pos_x=xpos;
    // pos_x=xpos+x_increase;
    // console.log("x_increase=", x_increase);
    // console.log("y_increase=", y_increase);
    // console.log("pos_x=", pos_x);
    // console.log("pos_y=", pos_y);
  }
}

// change of position y axis
if(y_increase >-200 == true){
  if (keyCode === UP_ARROW) {
   y_increase = y_increase-100;

//problem with translation tracking
     // pos_y=ypos;
     // pos_y=ypos+y_increase;
     // console.log("x_increase=", x_increase);
     // console.log("y_increase=", y_increase);
     // console.log("pos_x=", pos_x);
     // console.log("pos_y=", pos_y);
}
}

// change of position y axis
if(y_increase<200  == true){
 if (keyCode === DOWN_ARROW) {
   y_increase = y_increase+100;

//problem with translation tracking
    // pos_y=ypos;
    // pos_y=ypos+y_increase;
    // console.log("x_increase=", x_increase);
    // console.log("y_increase=", y_increase);
    // console.log("pos_x=", pos_x);
    // console.log("pos_y=", pos_y);
 }
}

//change of stories - up
if(keyCode === 188){
  z_increase = z_increase +100;
}

//change of stories - down
if(keyCode === 190){
  z_increase = z_increase -100;
  //controlling that blocks wont be build underneath plane
  if(z_increase<52 === true){
    z_increase = 52;
  }
}


// initializing building block
 if(keyCode === 32){

//problem with translation tracking
  // console.log("pos_x=", pos_x);
  // console.log("pos_y=", pos_y);
  // console.log("xpos=", xpos);
  // console.log("ypos=", ypos);
  // console.log("x_increase=", x_increase);
  // console.log("y_increase=", y_increase);
  //
  // var b = new housebox(x_increase,y_increase, 0); // Make a new object at the mouse location.
  // houseboxone.push(b);

  houseboxone.push(new housebox(x_increase,y_increase, z_increase));
  y_increase=0;
  x_increase=0;

  // console.log("x_increase=", x_increase);
  // console.log("y_increase=", y_increase);

}

}
