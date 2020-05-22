//camera setup
let cam_x, cam_y, cam_z;
let cam_cx, cam_cy, cam_cz;
let cam_dx, cam_dy, cam_dz;
let cam_xup, cam_yup, cam_zup;
let pan, tilt;
let seed;

//Game setup
let ground;
let box_width = 400;
let box_depth = 15;
let box_hight = 100;
let object_one_x = -160;
let object_one_y = -150;
let object_two_x = 160;
let object_two_y = -160;
let object_three_x = -80;
let object_three_y = 160;
let object_four_x = 70;
let object_four_y = -20;
let check_x;
let check_y;
let counter = 0;

function setup(){

  createCanvas(windowWidth,windowHeight,WEBGL);


  ground = loadImage("assets/grasstwo.jpg");

  // // enable easy cam
  // createEasyCam();
  //
  // // suppress right-click context menu
  // document.oncontextmenu = function() { return false; }


// init camera
cam_x = 0;
cam_y = 500;
cam_z = 80;
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

// win statement
  if(   object_one_x === 55  &&
        object_one_y === 230  &&
        object_two_x === 105  &&
        object_two_y === 230 &&
        object_three_x === 155 &&
        object_three_y === 230 &&
        object_four_x === 205 &&
        object_four_y === 230     ){

    //Maybe put some event here that makes it visible that the user has found all four ojects and won the game
    console.log("win");
  }


  lights(); //Just gave it lights to get an idea of how it could look, this should just be changed
  fill(200);
  texture(ground); //I have just given the maze a simple texture to get an idea, this you should just change

  //creation of plane for maze
  push();
  //noStroke();
  plane(500,500);
  pop();

 //calls maze
   maze();

 //calls objects
   objects();

 // check if camera and object collide
   catchobject();


  // camera set-up
  camera(cam_x, cam_y, cam_z, cam_cx, cam_cy, cam_cz, cam_xup, cam_yup, cam_zup);
  perspective(radians(60), width / height, 1, 10000);

  // handle user input
  if (keyIsPressed) handleUserInput();


}

function maze(){

  //maze  vertical walls
  push();

  rotateZ(radians(90));

  push();
  translate(0,-200,50);
  box(box_width,box_depth,box_hight);
  pop();

  push();
  translate(0,200,50);
  box(box_width,box_depth,box_hight);
  pop();

  push();
  translate(104,40,50);
  box(box_width/2-40,box_depth,box_hight);
  pop();

  push();
  translate(32,110,50);
  box(box_width/2-40,box_depth,box_hight);
  pop();

  push();
  translate(134,-40,50);
  box(box_width/2-100,box_depth,box_hight);
  pop();

  push();
  translate(74,-104,50);
  box(box_width/2-100,box_depth,box_hight);
  pop();

  push();
  translate(-22,-104,50);
  box(box_width/2-140,box_depth,box_hight);
  pop();

  push();
  translate(-22,-40,50);
  box(box_width/2-140,box_depth,box_hight);
  pop();

  push();
  translate(-152,124,50);
  box(box_width/2-135,box_depth,box_hight);
  pop();

  pop();

  // maze horizontical walls
  push();

  push();
  translate(0,-192,50);
  box(box_width-14,box_depth,box_hight);
  pop();

  push();
  translate(112,192,50);
  box(box_width/2-40,box_depth,box_hight);
  pop();

  push();
  translate(-112,192,50);
  box(box_width/2-40,box_depth,box_hight);
  pop();

  push();
  translate(-98,120,50);
  box(box_width/4,box_depth,box_hight);
  pop();

  push();
  translate(32,16,50);
  box(box_width/2-40,box_depth,box_hight);
  pop();

  push();
  translate(-68,-56,50);
  box(box_width/2-100,box_depth,box_hight);
  pop();

  push();
  translate(68,-126,50);
  box(box_width-150,box_depth,box_hight);
  pop();

  pop();
}

function objects(){

//object one
  push();
  translate(object_one_x,object_one_y,30); //postition of object is fixed, but the z position might need to be altered
  normalMaterial();
  box(10,10,10); // put object instead of box
  pop();

//object two
  push();
  translate(object_two_x,object_two_y,30);
  normalMaterial();
  box(10,10,10);
  pop();

//object three
  push();
  translate(object_three_x,object_three_y,30);
  normalMaterial();
  box(10,10,10);
  pop();

// object five
  push();
  translate(object_four_x,object_four_y,30);
  normalMaterial();
  box(10,10,10);
  pop();
}

function catchobject(){

//checks if camera position and object collide
    if(check_x > object_one_x -10  && check_x < object_one_x + 10 && check_y > object_one_y-10 && check_y< object_one_y+10){

        console.log("hello");

        object_one_x = 55;
        object_one_y = 230;

        counter = counter + 1;

    }

    if(check_x > object_two_x -10  && check_x < object_two_x + 10 && check_y > object_two_y-10 && check_y< object_two_y+10 ){

        console.log("hello");

        object_two_x = 105;
        object_two_y = 230;

        counter = counter + 1;

    }

    if(check_x > object_three_x -10  && check_x < object_three_x + 10 && check_y > object_three_y-10 && check_y< object_three_y+10 ){

        console.log("hello");

        object_three_x = 155;
        object_three_y = 230;

        counter = counter + 1;

    }

    if(check_x > object_four_x -10  && check_x < object_four_x + 10 && check_y > object_four_y-10 && check_y< object_four_y+10){

        console.log("hello");

        object_four_x = 205;
        object_four_y = 230;

        counter = counter + 1;

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

 check_x = cam_x;
 check_y = cam_y;
}
