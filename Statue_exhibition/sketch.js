let complete;
let mov;
let img;
let rot = 0;

function preload(){
  complete = loadModel("assets/tinker.obj", true);

   img = loadImage("assets/img.png", true);
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);



  // enable easy cam
createEasyCam();

// suppress right-click context menu
document.oncontextmenu = function() { return false; }

}

function draw(){
background(0);



if(rot === 1){
  directionalLight(255, 0,0, -1, 0, 0);
} else if( rot ===2){
  directionalLight(255, 255,0, 1, 0, 0);
} else if(rot===3){
  directionalLight(255, 0,255, 0, -1, 0);
} else if( rot ===4){
  directionalLight(0, 255,0, 0, 1, 0);
} else if( rot ===5){
  directionalLight(0, 255,255, 0, 0, -1);
} else if ( rot === 6){
  directionalLight(255, 0,255, 0, 0, 1);
}

if(frameCount%15==0 === true){
  rot ++
}


if(rot>6 === true){
  rot=0;
}
//lights();
//ambientLight(255,255,0);

// directionalLight(255, 0,0, -1, 0, 0);
//   directionalLight(255, 0,0, 1, 0, 0);
//  directionalLight(255, 0,0, 0, -1, 0);
//   directionalLight(255, 0,0, 0, 1, 0);
//  directionalLight(255, 0,0, 0, 0, -1);
//  directionalLight(255, 0,0, 0, 0, 1);

  // let locX = mouseX - width / 2;
  // let locY = mouseY - height / 2;
  //
  //
  //
  // pointLight(255, 255, 0, locX, locY, 50);




translate(0,50,0);

  //floor
  push();
  //ambientMaterial(255,255,0,30);
  ambientMaterial(255,60);
  translate(0,200,0);
  rotateX(radians(90));
  // tint(255, 10);
  // texture(img);
  box(700,500,3,0,0);
  pop();

  //ceiling
  push();
  ambientMaterial(255,60);
  // ambientMaterial(255,255,0,30);
  translate(0,-300,0);
  rotateX(radians(90));
    // texture(img);
  box(700,500,3);
  pop();

  //backwall
  push();
  translate(0,-47,-250)
  ambientMaterial(255,60);
  // ambientMaterial(255,255,0,30);
    // texture(img);
  box(700,500,3);
  pop();

  //frontwall
  push();
  translate(0,-47,250)
 ambientMaterial(255,60);
  // ambientMaterial(255,255,0,30);

    // texture(img);
  box(700,500,3);
  pop();

  //leftwall
  push();
  translate(-350,-47,0)
  rotateY(radians(90));
  //normalMaterial();
  // fill(0);
  ambientMaterial(255,60);
  // ambientMaterial(255,255,0,30);
    // texture(img);
  box(500,500,3);
  pop();

  //rightwall
  push();
  translate(350,-47,0)
  rotateY(radians(90));
  //normalMaterial();
  // fill(0);
  ambientMaterial(255,60);
  // ambientMaterial(255,255,0,30);
    // texture(img);
  box(500,500,3);
  pop();

  //sign
  push();
  noStroke();
  ambientMaterial(255);
  rotateX(radians(180));
  scale(3);
  translate(0,10,-10);
  //texture(img);
  model(complete);
  pop();


}
