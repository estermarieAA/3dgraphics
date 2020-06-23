//building setup
let houseboxone = [];
let facade;
let ground;
let xpos =0;
let ypos = 0;
let y_increase = 0;
let x_increase = 0;
let z_increase = 51;
let pos_x = 0;
let pos_y = 0;
let instruction;


//camera setup
let cam_x, cam_y, cam_z;
let cam_cx, cam_cy, cam_cz;
let cam_dx, cam_dy, cam_dz;
let cam_xup, cam_yup, cam_zup;
let pan, tilt;
let seed;


function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  facade = loadImage("assets/texture.png");
  ground = loadImage("assets/grass.png");

  //first building block
  houseboxone.push(new housebox(0, 0,51));

  // init camera
  cam_x = 0;
  cam_y = 700;
  cam_z = 500;
  cam_dx = 0;
  cam_dy = 0;
  cam_dz = 0;
  cam_xup = 0;
  cam_yup = 0;
  cam_zup = -10;
  pan = -1.60;
  tilt = -0.5;
  updateCamCenter();


}

function draw(){
  background(41, 41, 82);
  lights();



  // camera set-up
  camera(cam_x, cam_y, cam_z, cam_cx, cam_cy, cam_cz, cam_xup, cam_yup, cam_zup);
  perspective(radians(60), width / height, 1, 10000);
  // handle user input
  if (keyIsPressed) handleUserInput();


  //calling building blocks
  push();
  for (var i = 0; i < houseboxone.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    houseboxone[i].display();
  }
  pop();


  //creation of building plane
  push();
  noStroke();
  fill(139,199,167);
  //texture(ground);
  plane(700, 700);
  pop();

  //placement box
  push();
  translate(xpos+x_increase,ypos+y_increase,52+z_increase);
  fill(255,0,0,50);
  box(100,100,2);
  pop();
  //
  // console.log("pan=", pan);
  // console.log("tilt=", tilt);

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
    texture(facade);
    box(this.w, this.h, this.d);
    rotateX(radians(90));
    translate(10,0,-52);
    fill(64, 64, 237);
    box(40,60,2);
    translate(10,0,104);
    box(40,60,2);
    pop();
  }
}


function keyPressed() {

// change of position x axis
if(x_increase > -200 == true){
  if (keyCode === 68) {
    x_increase = x_increase-100;
  }
  }

// change of position x axis
if(x_increase < 200 == true){
  if (keyCode === 71) {
    x_increase = x_increase+100;
  }
}

// change of position y axis
if(y_increase >-200 == true){
  if (keyCode === 82) {
   y_increase = y_increase-100;
}
}

// change of position y axis
if(y_increase<200  == true){
 if (keyCode === 70) {
   y_increase = y_increase+100;
 }
}

//change of stories - up
if(keyCode === 75){
  z_increase = z_increase +100;
  cam_z = cam_z + 100; //moving camera to look at current floor
}

//change of stories - down
if(keyCode === 74){
  z_increase = z_increase -100;
  cam_z = cam_z - 100; //moving camera to look at current floor
  //controlling that blocks wont be build underneath plane
  if(z_increase<52 === true){
    z_increase = 52;
    cam_z = 300; //moving camera to look at current floor
  }
}


// initializing building block
 if(keyCode === 32){ //spacebar

  houseboxone.push(new housebox(x_increase,y_increase, z_increase));
  y_increase=0;
  x_increase=0;
}

}

function handleUserInput() {
 let s = 3; // moving speed
 switch (keyCode) {
 case UP_ARROW: // move forward
 cam_x += s * cam_dx;
 cam_y += s * cam_dy;
 break;
 case DOWN_ARROW: // move backward
 cam_x -= s * cam_dx;
 cam_y -= s * cam_dy;
 break;
 case LEFT_ARROW: // pan to the left
 pan -= 0.02;
 break;
 case RIGHT_ARROW: // pan to the right
 pan += 0.02;
 break;
 }

 switch (key) {
 case 'a':
 tilt += 0.02;
 if (tilt > HALF_PI) tilt = HALF_PI;
 break;
 case 'z':
 tilt -= 0.02;
 if (tilt < -HALF_PI) tilt = -HALF_PI;
 break;
 }
 updateCamCenter();
}


function updateCamCenter() {
 // computer camera direction

 // tilt matrix (rotate about y)
 // | dx | = | cos(tilt) 0 -sin(tilt) | | 1 |
 // | dy | = | 0 1 0 | x | 0 |
 // | dz | = | sin(tilt) 0 cos(tilt) | | 0 |
 //cam_dx = cos(tilt);
 //cam_dy = 0;
 //cam_dz = sin(tilt);

 // pan matrix (rotate about z)
 // | dx | = | cos(pan) -sin(pan) 0 | | 1 |
 // | dy | = | sin(pan) cos(pan) 0 | x | 0 |
 // | dz | = | 0 0 1 | | 0 |
 //cam_dx = cos(pan);
 //cam_dy = sin(pan);
 //cam_dz = 0;

 // pan matrix x tilt matrix
 // | dx | = | cos(pan) -sin(pan) 0 | | cos(tilt) |
 // | dy | = | sin(pan) cos(pan) 0 | x | 0 |
 // | dz | = | 0 0 1 | | sin(tilt) |

 cam_dx = cos(pan) * cos(tilt);
 cam_dy = sin(pan) * cos(tilt);
 cam_dz = sin(tilt);
 // compute scene center position
 cam_cx = cam_x + cam_dx;
 cam_cy = cam_y + cam_dy;
 cam_cz = cam_z + cam_dz;
}
