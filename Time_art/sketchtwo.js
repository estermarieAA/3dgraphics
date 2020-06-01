
var rotc=5;

var rots=18;

var sWeight=1;

var branchP;
var zpos = 0;

var tall;
var place;
let timedStep;
let fall = 2;
let count = 0;
let rot = 0.2;



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  background(255);



}

function draw(){



  translate(0,300,0);

  stroke(255,0,0);
  stroke("#582B02");
  strokeWeight(sWeight);



if (frameCount === 10) {
  for( let i = 0; i<10; i++){
    push();
  rotateY(radians(36*i));
        push();
        tree(0);
        pop();
    pop();

  }
}

if(frameCount % 300 === 0){
  for( let i = 0; i<10; i++){
    push();
  rotateY(radians(36*i));
        push();
        tree(0);
        pop();
    pop();

  }
}




}

function tree (tall){


      var branchP= -height/15;

      if (tall < 5){


        strokeWeight(3);
        line(0,0,0,0,branchP,0);
        translate(0,branchP,0);
        rotate(radians(random(-rotc,rotc)));


        if (random(10) < 7){

          scale(0.8);
          rotate(radians(rots));
          push();
          tree(tall + 1);
          pop();

          rotate(radians(-rots*2));
          push();
          tree(tall + 1);
          pop();


        } else {
          tree(tall);
        }

        if(tall>1) {
          leaf(branchP);
        }
      }


}

function leaf(place) {
  noStroke();

  fill(255,int(random(59,180)),int(random(213,239)));

  ellipse(20,random(place)+fall,25*2,12*2);
  ellipse(-20,random(place)+fall,25*2,12*"");

  stroke("#582B02");

}
