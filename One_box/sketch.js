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





function preload() {

    facade = loadImage("assets/texture.png");
      ground = loadImage("assets/grasstwo.jpg");

}

function setup(){

  createCanvas(windowWidth,windowHeight,WEBGL);

// init camera
cam_x = 0;
cam_y = 1000;
cam_z = 300;
cam_dx = 0;
cam_dy = 0;
cam_dz = 0;
cam_xup = 0;
cam_yup = 0;
cam_zup = -10;
pan = -1.60;
tilt = -0.18;
updateCamCenter();

}

function draw(){
  background(255);

lights();


  push();
  noStroke();
  texture(ground);
  plane(1000,1000);
  pop();

  //building();

  // camera set-up
  camera(cam_x, cam_y, cam_z, cam_cx, cam_cy, cam_cz, cam_xup, cam_yup, cam_zup);
  perspective(radians(60), width / height, 1, 10000);
  // handle user input
  if (keyIsPressed) handleUserInput();
  //orbitControl();

  push();
  for (var i = 0; i < outerwalls.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    outerwalls[i].display();
  }
  pop();

  texture(facade);

  outerwalls.push(new wall(500, 500,10,0,-250,500/2,90));
  outerwalls.push(new wall(500, 500,10,0,250,500/2,90));
  outerwalls.push(new wall(500, 500,10,-250,0,500/2,0));
  outerwalls.push(new wall(500, 500,10,250,0,500/2,0));

}



class wall{
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
    //texture(facade);
    box(this.w,this.h,this.d);
    pop();
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
 case ',':
 cam_y+=30;
 cam_z+=10;
 break;
 case '.':
 cam_y-=30;
 cam_z-=10;
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
