console.log("isthisworking");

var valueR = 0;
var valueG = 0;
var valueB = 0;
var x = 0;
var y = 0;
var sizing = 100;

function setup() {
  var myCanvas = createCanvas(800,250,WEBGL);
  myCanvas.parent('mySketch');
}

function draw() {
  background(0);
  translate(10,10,0);
  fill(valueR,valueG,valueB);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(sizing,50);
  // rotateX(x);
  // x = x + .01;
  // if (x > 100) {
  //   x = 0;
  // }
  // rotateY(y);
  // y = y + .01;
  // if (y > 100) {
  //   y = 0;
  // }
  // box(100);
}

function mouseMoved() {
  valueR = valueR + 1;
  if (valueR >= 255) {
    valueR = 0;
  }

  valueG = valueG + 0.5;
  if (valueG >= 255) {
    valueG = 0;
  }

  valueB = valueB + 0.25;
  if (valueB >= 255) {
    valueB = 0;
  }
}

function mousePressed() {
  if (sizing == 100) {
    sizing = 80;
  }
  else {
    sizing = 100
  }
}

function mouseReleased() {
  if (sizing <= 80) {
    sizing = 100;
  }
}
