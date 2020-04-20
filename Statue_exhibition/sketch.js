let complete;
let rot = 0;
let rotatebox= 0;

function preload(){
  complete = loadModel("assets/tinker.obj", true);

}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);


//
//   // enable easy cam
// createEasyCam();
//
// // suppress right-click context menu
// document.oncontextmenu = function() { return false; }

}

function draw(){
background(0);



lighting();

//placement and rotation of box
translate(0,50,-250);
rotatebox += 0.2;
rotateY(radians(rotatebox));

boxwithsign();

}

function lighting (){

  shininess(20);

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
}

function boxwithsign(){
  //floor
  push();
  ambientMaterial(255,60);
  translate(0,200,0);
  rotateX(radians(90));
  box(700,500,3,0,0);
  pop();

  //ceiling
  push();
  ambientMaterial(255,60);
  translate(0,-300,0);
  rotateX(radians(90));
  box(700,500,3);
  pop();

  //backwall
  push();
  translate(0,-47,-250)
  ambientMaterial(255,60);
  box(700,500,3);
  pop();

  //frontwall
  push();
  translate(0,-47,250)
  ambientMaterial(255,60);
  box(700,500,3);
  pop();

  //leftwall
  push();
  translate(-350,-47,0)
  rotateY(radians(90));
  ambientMaterial(255,60);
  box(500,500,3);
  pop();

  //rightwall
  push();
  translate(350,-47,0)
  rotateY(radians(90));
  ambientMaterial(255,60);
  box(500,500,3);
  pop();

  //sign
  push();
  noStroke();
  ambientMaterial(255);
  rotateX(radians(180));
  scale(3);
  translate(0,10,-10);
  //specular material makes it easier to see were the lights come from
  specularMaterial(255);
  model(complete);
  pop();
}
