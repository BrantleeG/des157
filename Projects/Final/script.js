'use strict';

console.log("reading info");

console.log("working...");

var click=0;

var usaflag = document.getElementById("usaflag");
var germanyflag = document.getElementById("germanyflag");
var franceflag = document.getElementById("franceflag");
var spainflag = document.getElementById("spainflag");
var japanflag = document.getElementById("japanflag");
var brazilflag = document.getElementById("brazilflag");

var thumbsupimg = document.getElementById("thumbsupimg");
var okimg = document.getElementById("okimg");
var handarmimg = document.getElementById("handarmimg");
var eyeimg = document.getElementById("eyeimg");

var usa = document.getElementById("usa");
var germany = document.getElementById("germany");
var france = document.getElementById("france");
var spain = document.getElementById("spain");
var japan = document.getElementById("japan");
var brazil = document.getElementById("brazil");

var thumbsup = document.getElementById("thumbsup");
var ok = document.getElementById("ok");
var handarm = document.getElementById("handarm");
var eye = document.getElementById("eye");

usa.addEventListener('change', function() {
  usaflag.style.webkitTransform = 'scale(1.2,1.2)';
  germanyflag.style.webkitTransform = 'scale(1,1)';
  franceflag.style.webkitTransform = 'scale(1,1)';
  spainflag.style.webkitTransform = 'scale(1,1)';
  japanflag.style.webkitTransform = 'scale(1,1)';
  brazilflag.style.webkitTransform = 'scale(1,1)';
})

germany.addEventListener('change', function() {
  usaflag.style.webkitTransform = 'scale(1,1)';
  germanyflag.style.webkitTransform = 'scale(1.2,1.2)';
  franceflag.style.webkitTransform = 'scale(1,1)';
  spainflag.style.webkitTransform = 'scale(1,1)';
  japanflag.style.webkitTransform = 'scale(1,1)';
  brazilflag.style.webkitTransform = 'scale(1,1)';
})

france.addEventListener('change', function() {
  usaflag.style.webkitTransform = 'scale(1,1)';
  germanyflag.style.webkitTransform = 'scale(1,1)';
  franceflag.style.webkitTransform = 'scale(1.2,1.2)';
  spainflag.style.webkitTransform = 'scale(1,1)';
  japanflag.style.webkitTransform = 'scale(1,1)';
  brazilflag.style.webkitTransform = 'scale(1,1)';
})

spain.addEventListener('change', function() {
  usaflag.style.webkitTransform = 'scale(1,1)';
  germanyflag.style.webkitTransform = 'scale(1,1)';
  franceflag.style.webkitTransform = 'scale(1,1)';
  spainflag.style.webkitTransform = 'scale(1.2,1.2)';
  japanflag.style.webkitTransform = 'scale(1,1)';
  brazilflag.style.webkitTransform = 'scale(1,1)';
})

japan.addEventListener('change', function() {
  usaflag.style.webkitTransform = 'scale(1,1)';
  germanyflag.style.webkitTransform = 'scale(1,1)';
  franceflag.style.webkitTransform = 'scale(1,1)';
  spainflag.style.webkitTransform = 'scale(1,1)';
  japanflag.style.webkitTransform = 'scale(1.2,1.2)';
  brazilflag.style.webkitTransform = 'scale(1,1)';
})

brazil.addEventListener('change', function() {
  usaflag.style.webkitTransform = 'scale(1,1)';
  germanyflag.style.webkitTransform = 'scale(1,1)';
  franceflag.style.webkitTransform = 'scale(1,1)';
  spainflag.style.webkitTransform = 'scale(1,1)';
  japanflag.style.webkitTransform = 'scale(1,1)';
  brazilflag.style.webkitTransform = 'scale(1.2,1.2)';
})

thumbsup.addEventListener('change', function() {
  thumbsupimg.style.webkitTransform = 'scale(1.1,1.1)';
  okimg.style.webkitTransform = 'scale(1,1)';
  handarmimg.style.webkitTransform = 'scale(1,1)';
  eyeimg.style.webkitTransform = 'scale(1,1)';
})

ok.addEventListener('change', function() {
  thumbsupimg.style.webkitTransform = 'scale(1,1)';
  okimg.style.webkitTransform = 'scale(1.1,1.1)';
  handarmimg.style.webkitTransform = 'scale(1,1)';
  eyeimg.style.webkitTransform = 'scale(1,1)';
})

handarm.addEventListener('change', function() {
  thumbsupimg.style.webkitTransform = 'scale(1,1)';
  okimg.style.webkitTransform = 'scale(1,1)';
  handarmimg.style.webkitTransform = 'scale(1.1,1.1)';
  eyeimg.style.webkitTransform = 'scale(1,1)';
})

eye.addEventListener('change', function() {
  thumbsupimg.style.webkitTransform = 'scale(1,1)';
  okimg.style.webkitTransform = 'scale(1,1)';
  handarmimg.style.webkitTransform = 'scale(1,1)';
  eyeimg.style.webkitTransform = 'scale(1.1,1.1)';
})
