let teapot;
let podium;
let podiumtwo;
let podiumthree;
let podiumfour;
let podiumfive;
let podiumsix;
let rot=0;
let img;
let colorone;
let colortwo;
let colorthree;
let tea;
let does;
let not;
let have;
let tobe;
let booring;
//let song, analyzer;
//let rms;

function preload() {
  podium = loadModel("assets/tinker.obj",true);
  podiumtwo = loadModel("assets/tinkers.obj",true);
  podiumthree = loadModel("assets/tinkers.obj",true);
  podiumfour = loadModel("assets/tinkers.obj",true);
  podiumfive = loadModel("assets/tinkers.obj",true);
  podiumsix = loadModel("assets/tinkers.obj",true);
  teapot = loadModel('assets/teapot.obj', true);
  tea = loadModel('assets/tinker3.obj', true);
  does = loadModel('assets/tinker4.obj', true);
  not = loadModel('assets/tinker5.obj', true);
  have = loadModel('assets/tinker6.obj', true);
  tobe = loadModel('assets/tinker7.obj', true);
  booring = loadModel('assets/tinker8.obj', true);

  img = loadImage('assets/marble.jpeg');

   //song = loadSound('assets/DWIG.mp3');
}



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(10);

    //song.loop();
    // analyzer = new p5.Amplitude();
    // analyzer.setInput(song);
}

function draw() {
  background(10,255,10);
    lights();
     //
     // rms = analyzer.getLevel();


    colorone=random(0,255);
    colortwo=random(0,255);
    colorthree=random(0,255);

    room();
    teatext();
}

function room(){

//noStroke();
  //normalMaterial();
  //round podium
  push();
  translate(-110,300,100);
    rotateX(radians(80));
    rotateZ(radians(200));
      scale(3);

      fill(random(255),random(255),random(255));

    //fill(0,255,10);
    model(podium);
    pop();

    //teapot
  push();
    translate(30,-35,140);
     scale(2);
     rotateX(radians(80));
     rotateZ(rot);
     rot+= 0.2;
     fill(random(255),random(255),random(255));
  // fill(0,255,10);
    model(teapot);
  pop();

  //groundfloor
  push();
  translate(0,150,0);
  scale(6);
  rotateX(radians(80))
  rotateZ(radians(180));
  fill(random(255),random(255),random(255));
  // fill(0,255,10);
  model(podiumtwo);
  pop();

  //backwall
  push();
    translate(0,0,-250);
    scale(6);
    fill(random(255),random(255),random(255));
    // fill(0,255,10);
    model(podiumthree);
  pop();

  //sidewall
  push();
    translate(-400,0,-350);
    scale(6);
    fill(random(255),random(255),random(255));
    // fill(0,255,10);
    rotateY(radians(90));
    model(podiumfour);
  pop();

  //sidewall
  push();
    translate(400,0,-350);
    scale(6);
    fill(random(255),random(255),random(255));
    // fill(0,255,10);
    rotateY(radians(-90));
    model(podiumfive);
  pop();


  //ceiling
  push();
    translate(0,-450,-450);
    scale(6);
    fill(random(255),random(255),random(255));
    // fill(0,255,10);
    rotateX(radians(-90));
    rotateZ(radians(180));
    model(podiumsix);
  pop();
}


function teatext(){


  //tea
  push();
  translate(-165,155,365);
  rotateX(radians(180));
  //rotateY(radians(90));
  fill(colorone,colortwo,colorthree);
  model(tea);


  //does
  push();
  translate(-210,225,250);
  rotateX(radians(3));
  rotateY(radians(-80));
  rotateY(radians(10));
  fill(colorone,colortwo,colorthree);
  model(does);
  pop();

  // NOT
  push();
  translate(-50,240,650);
  // rotateX(radians(3));
  // rotateY(radians(-80));
  // rotateY(radians(10));
  //fill(colorone,colortwo,colorthree);
  model(not);
  pop();

  // have
  push();
  translate(200,500,650);
  // rotateX(radians(3));
  // rotateY(radians(-80));
  // rotateY(radians(10));
  //fill(colorone,colortwo,colorthree);
  model(have);
  pop();

  // to be
  push();
  translate(430,220,400);
  rotateX(radians(-7));
  //rotateY(radians(40));
  rotateY(radians(30));
  //fill(colorone,colortwo,colorthree);
  model(tobe);
  pop();

  // booring
  push();
  translate(450,0,300);
  rotateY(radians(40));

  rotateY(radians(12));
  //fill(colorone,colortwo,colorthree);
  model(booring);
  pop();
  }
