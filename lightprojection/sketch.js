let screens = [];
let sound;
let amp;
let vid;

function preload(){
  sound = loadSound('assets/mozart.mp3');
  vid = createVideo("assets/mozart.mp4");
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL)

  for (let i = 0; i < 10; i++) {
    screens.push(new screen(0,-150,-200 + random(-30,30),random(100,400),random(100,400),random(-1,1)));//random(-30,30)*100));
  } //random(255),random(20),random(255),

  amp = new p5.Amplitude();



// screens[0].push = new screen(0,0,4,100,100,255,255,255, -300);

// enable easy cam
  createEasyCam();

  // suppress right-click context menu
  document.oncontextmenu = function() { return false; }

}

function draw(){
  background(10);



  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  for (let i = 0; i < screens.length; i++) {
      screens[i].display();
      screens[i].move();
      screens[i].colorchange();

    }

  //lights();
directionalLight(255, 255, 255, 0,1,0);
directionalLight(255, 255, 255, 0,1,-1);


//spotLight(255, 0,0,0,350,300,0, 150, 0, radians(180));
//pointLight(255,0,0,0,300,300);



  push();
  texture(vid);
  //ambientMaterial(255,255,255);
  translate(0,150,0);
  push();
  rotateX(radians(85))
  box(700,500,10);
  pop();
  pop();

  // screenone.display();
  // screenone.move();
//  screenone.spot();
}

function mousePressed(){

    vid.loop();
    vid.hide();
    vid.volume(0);


   sound.loop();
}

class screen{
  // constructor(x,y,z,w,h,r,g,b,time){
    constructor(x,y,z,w,h,time){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
    // this.color = color;
    // this.r = r;
    // this.g = g;
    // this.b = b;
    this.speed;
    this.time = time;
    this.distance = 700;
    this.vol;
    this.plus;
    this.r;
    this.g;
    this.b;

  }

  colorchange(){
    this.r = 241;
    this.g = 247;
    this.b = map(this.vol, 0,0.1,0,255);
  }

  display(){

    //spotLight(255,255,255,this.x,this.y,200, 0,0,-1);
    push();
    translate(this.x,this.y, this.z);
    ambientLight(255,255,255);
    ambientMaterial(this.r,this.g, this.b,100);
    box(this.w+this.vol*100,this.h+this.vol*100,2);
    pop();
  }

  move(){
    this.vol = amp.getLevel();
    console.log(this.vol);
    //this.plus = map(-30,30,0,this.vol);

    // this.speed = this.distance/this.time;
    this.speed =map(this.vol,0,0.1,0,3);
    this.x=this.x +  this.speed*this.time;
    // this.x=this.x + this.speed
    if(this.x>windowWidth/2 === true){
      console.log("hello")
      this.x = 0
    }

    if(this.x<-windowWidth/2 === true){
      this.x = 0;
    }
  }



}

// function vidLoad() {
//   vid.loop();
//   vid.volume(0);
// }
