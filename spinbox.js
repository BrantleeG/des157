console.log("isthisworking");

var value = 0;
var x = 0;
var y = 0;
var sizing = 120;

function setup() {
  var myCanvas = createCanvas(800,250,WEBGL);
  myCanvas.parent('mySketch');
}

function draw() {
  background(0);
  translate(10,10,0);
  fill(255);
  rotateX(x);
  x = x + .01;
  if (x > 100) {
    x = 0;
  }
  rotateY(y);
  y = y + .01;
  if (y > 100) {
    y = 0;
  }
  box(100);
}

// function mouseIsMoved() {
//   value = value + 1;
//   if (value > 255) {
//     value = -value;
//   }
// }

// function mouseIsPressed() {
//   if (sizing == 120) {
//     sizing = 100;
//   }
//   else {
//     sizing = 120
//   }
// }

// function mouseIsReleased() {
//   if (sizing <= 120) {
//     sizing = 120;
//   }
// }
