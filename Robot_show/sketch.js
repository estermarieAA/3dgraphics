let body;
let head;
let rightarm;
let leftarm;
let rightleg;
let leftleg;
let rot;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(204, 151, 18);

  body = new robotbody(0,0,0,50,100,0);
  head = new robotbody(0,-100,0,80,80,0);
  rightarm = new robotbody(-70,-10,0,70,30,0);
  leftarm = new robotbody(70,-10,0,70,30,0);
  rightleg = new robotbody(-30,95,0,30,70,10);
  leftleg = new robotbody(30,95,0,30,70,-10);

  frameRate(120);
  // // enable easy cam
  // createEasyCam();
  //
  // // suppress right-click context menu
  // document.oncontextmenu = function() { return false; }
}

function draw(){

lights();

shininess(20);
directionalLight(255,255,0,0,0,1);
ambientLight(0,0,255);



if(mouseIsPressed){
  rotateY(radians(180));
  rotateZ(radians(180));
  rotateX(radians(45));

}
// rotateY(radians(40));
push();

//translate(0,0,-300);

body.display();
body.update();
body.moveit();

head.moveit();
head.display();
head.update();

rightarm.moveit();
rightarm.display();
rightarm.update();

leftarm.moveit();
leftarm.display();
leftarm.update();

rightleg.moveit();
rightleg.display();
rightleg.update();

leftleg.moveit();
leftleg.display();
leftleg.update();

pop();

// pop();



}

class robotbody {
    constructor(x,y,z,w,h,r){
      this.pos = createVector(x,y,z);
      this.w = w;
      this.h = h;
      this.r = r
      this.d = 0;
      this.ud = 0;
      this.move;
      this.direction;
      this.change;
      this.t;
    }


    display(){
      push();
      translate(this.pos);
      rotateZ(radians(this.r));
      ambientMaterial(22, 120, 247);
      // fill(22, 120, 247);
      box(this.w,this.h,50);
      pop();
    }

    update(){

      push();
      if(mouseX>windowWidth/2== true){
        this.d = 1;
        rotateZ(radians(45));
      } else if( mouseX < windowWidth/2 == true){
        this.d = -1;
          rotateZ(radians(-45));
      }

      if(mouseY>windowHeight/2== true){
        this.ud = 1;
        rotateY(radians(-45));
      } else if( mouseY<windowHeight/2== true){
        this.ud = -1;
        rotateY(radians(45));
      }

      if(mouseX == windowWidth/2 === true){
        this.d=0
      }
      if(mouseY == windowHeight/2 === true){
        this.ud = 0;
      }

      if(mouseIsPressed){
        this.d=0;
        this.ud=0;
      }



      this.move=createVector( mouseX , mouseY,0);


      this.direction = createVector(this.d*2,this.ud*2,0);

      this.pos.add(this.direction);

      pop();
    }

    moveit(){
      push();
      this.move=createVector(mouseX,mouseY,0);
      stroke(138, 3, 66);
      strokeWeight(5)

      line(this.pos.x, this.pos.y, this.pos.z,  this.move.x-windowWidth/2, this.move.y-windowHeight/2, this.move.z);

      stroke(204, 156, 230);
      strokeWeight(3)
      line(this.pos.x-5, this.pos.y-5, this.pos.z,  this.move.x-windowWidth/2, this.move.y-windowHeight/2, this.move.z);
      pop();
    }

}
