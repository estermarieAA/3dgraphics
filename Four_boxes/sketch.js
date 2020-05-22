//camera setup
let cam_x, cam_y, cam_z;
let cam_cx, cam_cy, cam_cz;
let cam_dx, cam_dy, cam_dz;
let cam_xup, cam_yup, cam_zup;
let pan, tilt;
let seed;

//design
let facade;
let ground;
let outerwalls = [];
let windows = [];
let rightside_p = 125;
let leftside_p = - rightside_p;

function setup(){

  createCanvas(windowWidth,windowHeight,WEBGL);

  facade = loadImage("assets/texture.png");
  ground = loadImage("assets/grasstwo.jpg");


  // ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
//  ortho();

// // init camera
// cam_x = 0;
// cam_y = 1000;
// cam_z = 300;
// cam_dx = 0;
// cam_dy = 0;
// cam_dz = 0;
// cam_xup = 0;
// cam_yup = 0;
// cam_zup = -10;
// pan = -1.60;
// tilt = -0.18;
// updateCamCenter();

// enable easy cam
createEasyCam();

// suppress right-click context menu
document.oncontextmenu = function() { return false; }


}

function draw(){
  background(255);

lights();

  push();
  noStroke();
  //rotateX(radians(85));
//  fill(100,100);
  texture(ground);
  plane(500,1000);
  // translate(0,-300,50);
  // box(100)
  pop();

  building();

  // // camera set-up
  // camera(cam_x, cam_y, cam_z, cam_cx, cam_cy, cam_cz, cam_xup, cam_yup, cam_zup);
  // perspective(radians(60), width / height, 1, 10000);
  // // handle user input
  // if (keyIsPressed) handleUserInput();
  // //orbitControl();

}

function building(){

  push();
  for (var i = 0; i < outerwalls.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    outerwalls[i].display();
  }
  pop();

  push();
  for (var i = 0; i < windows.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    windows[i].display();
  }
  pop();

  //backwall
  outerwalls.push(new wall(100, 250,10,0,-400+5,100/2,90));
    outerwalls.push(new wall(100, 250,10,0,-400+55,100/2,90));

  //right side

  //back
  outerwalls.push(new wall(100, 60,10,rightside_p,-130,100/2,0));
  outerwalls.push(new wall(100, 60,10,rightside_p,-190,100/2,0));
  outerwalls.push(new wall(100, 60,10,rightside_p,-250,100/2,0));
  outerwalls.push(new wall(100, 60,10,rightside_p,-310,100/2,0));
  outerwalls.push(new wall(100, 60,10,rightside_p,-370,100/2,0));

  //middle
  outerwalls.push(new wall(200, 50,10,rightside_p,-75,200/2,0));
  outerwalls.push(new wall(300, 50,10,rightside_p,-25,150,0));
  outerwalls.push(new wall(300, 100,10,rightside_p,50,150,0));
  outerwalls.push(new wall(300, 50,10,rightside_p,125,150,0));
  outerwalls.push(new wall(220, 50,10,rightside_p,175,220/2,0));

  //front
  outerwalls.push(new wall(120, 50,10,rightside_p,225,120/2,0));
  outerwalls.push(new wall(120, 50,10,rightside_p,275,120/2,0));
  outerwalls.push(new wall(120, 50,10,rightside_p,325,120/2,0));
  outerwalls.push(new wall(120, 50,10,rightside_p,375,120/2,0));

  //left side

  //back
  outerwalls.push(new wall(100, 60,10,leftside_p,-130,100/2,0));
  outerwalls.push(new wall(100, 60,10,leftside_p,-190,100/2,0));
  outerwalls.push(new wall(20, 60,10,leftside_p,-250,100/2+40,0));
  outerwalls.push(new wall(20, 60,10,leftside_p,-250,100/2-40,0));
  outerwalls.push(new wall(100, 60,10,leftside_p,-310,100/2,0));
  outerwalls.push(new wall(100, 60,10,leftside_p,-370,100/2,0));

  //middle
  outerwalls.push(new wall(200, 50,10,leftside_p,-75,200/2,0));
  outerwalls.push(new wall(300, 50,10,leftside_p,-25,150,0));
  outerwalls.push(new wall(300, 100,10,leftside_p,50,150,0));
  outerwalls.push(new wall(300, 50,10,leftside_p,125,150,0));
  outerwalls.push(new wall(220, 50,10,leftside_p,175,220/2,0));

  //front
  outerwalls.push(new wall(120, 50,10,leftside_p,225,120/2,0));
  outerwalls.push(new wall(120, 50,10,leftside_p,275,120/2,0));
  outerwalls.push(new wall(120, 50,10,leftside_p,325,120/2,0));
  outerwalls.push(new wall(50, 50,10,leftside_p,375,50/2+70,0));

  //frontwall
  //outerwalls.push(new wall(120, 200,10,25,400-5,120/2,90));
  outerwalls.push(new wall(120, 25,10,112,400-5,120/2,90));
  outerwalls.push(new wall(120, 75,10,-38,400-5,120/2,90));
  outerwalls.push(new wall(50, 50,10,-100,400-5,50/2+70,90));
  outerwalls.push(new wall(20, 100,10,50,400-5,50/2+85,90));
    outerwalls.push(new wall(20, 100,10,50,400-5,50/2-15,90));

  //windows on ground floor
  // push();
  // windows.push(new windowframe(80, 80,10,0,400,120/2,90));
  // pop();
}

class wall{
  constructor(w,h,d,x,y,z,r, two){
    this.w = w;
    this.h = h;
    this.d = d;
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
  }

  display(){
    //wall
    push();
    translate(this.x,this.y,this.z);
    rotateY(radians(90));
    rotateX(radians(this.r));
    //noStroke();
  //  texture(facade);
    //noFill();
    box(this.w,this.h,this.d);
    pop();
  }
}

class windowframe{
  constructor(w,h,d,x,y,z,r){
    this.w = w;
    this.h = h;
    this.d = d;
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
  }

  display(){
    //wall
    push();
    translate(this.x,this.y,this.z);
    rotateY(radians(90));
    rotateX(radians(this.r));
    //noStroke();
    //texture(facade);
    //noFill();
    fill(0,0,255);
    box(this.w,this.h,this.d);
    pop();
  }
}
// function handleUserInput() {
//  let s = 3; // moving speed
//  switch (keyCode) {
//  case UP_ARROW: // move forward
//  cam_x += s * cam_dx;
//  cam_y += s * cam_dy;
//  break;
//  case DOWN_ARROW: // move backward
//  cam_x -= s * cam_dx;
//  cam_y -= s * cam_dy;
//  break;
//  case LEFT_ARROW: // pan to the left
//  pan -= 0.02;
//  break;
//  case RIGHT_ARROW: // pan to the right
//  pan += 0.02;
//  break;
//  }
//
//  switch (key) {
//  case 'a':
//  tilt += 0.02;
//  if (tilt > HALF_PI) tilt = HALF_PI;
//  break;
//  case 'z':
//  tilt -= 0.02;
//  if (tilt < -HALF_PI) tilt = -HALF_PI;
//  break;
//  case ',':
//  cam_y+=30;
//  cam_z+=10;
//  break;
//  case '.':
//  cam_y-=30;
//  cam_z-=10;
//  break;
//  }
//  updateCamCenter();
// }
//
//
// function updateCamCenter() {
//  // computer camera direction
//
//  // tilt matrix (rotate about y)
//  // | dx | = | cos(tilt) 0 -sin(tilt) | | 1 |
//  // | dy | = | 0 1 0 | x | 0 |
//  // | dz | = | sin(tilt) 0 cos(tilt) | | 0 |
//  //cam_dx = cos(tilt);
//  //cam_dy = 0;
//  //cam_dz = sin(tilt);
//
//  // pan matrix (rotate about z)
//  // | dx | = | cos(pan) -sin(pan) 0 | | 1 |
//  // | dy | = | sin(pan) cos(pan) 0 | x | 0 |
//  // | dz | = | 0 0 1 | | 0 |
//  //cam_dx = cos(pan);
//  //cam_dy = sin(pan);
//  //cam_dz = 0;
//
//  // pan matrix x tilt matrix
//  // | dx | = | cos(pan) -sin(pan) 0 | | cos(tilt) |
//  // | dy | = | sin(pan) cos(pan) 0 | x | 0 |
//  // | dz | = | 0 0 1 | | sin(tilt) |
//
//  cam_dx = cos(pan) * cos(tilt);
//  cam_dy = sin(pan) * cos(tilt);
//  cam_dz = sin(tilt);
//  // compute scene center position
//  cam_cx = cam_x + cam_dx;
//  cam_cy = cam_y + cam_dy;
//  cam_cz = cam_z + cam_dz;
// }
