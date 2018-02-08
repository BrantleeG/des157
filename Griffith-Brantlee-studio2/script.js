'use strict';

document.addEventListener("DOMContentLoaded"), function(event) {

  console.log("it-works");
  var laptop = document.getElementById("laptop");
  var jordan = document.getElementById("jordan");
  var earphones = document.getElementById("earphones");
  var laptopTXT = document.getElementById("laptopTXT");
  var jordanTXT = document.getElementById("jordanTXT");
  var earphonesTXT = document.getElementById("earphonesTXT");
  var close = document.getElementById("close");

  laptop.addEventListener('mouseover', function() {
    laptop.style.webkitTransform = 'scale(1.2,1.2)';
  })

  laptop.addEventListener('mouseout', function() {
    laptop.style.webkitTransform = 'scale(1,1)';
  })

  laptop.addEventListener('click', function() {
    laptopTXT.style.display="block";
  })

  jordan.addEventListener('mouseover', function() {
    jordan.style.webkitTransform = 'scale(1.2,1.2)';
  })

  jordan.addEventListener('mouseout', function() {
    jordan.style.webkitTransform = 'scale(1,1)';
  })

  jordan.addEventListener('click', function() {
    jordanTXT.style.display="block";
  })

  earphones.addEventListener('mouseover', function() {
    earphones.style.webkitTransform = 'scale(1.2,1.2)';
  })

  earphones.addEventListener('mouseout', function() {
    earphones.style.webkitTransform = 'scale(1,1)';
  })

  earphones.addEventListener('click', function() {
    earphonesTXT.style.display="block";
  })

  exit.addEventListener('click', function() {
    laptopTXT.style.display="none";
  })

  exit1.addEventListener('click', function() {
    jordanTXT.style.display="none";
  })

  exit2.addEventListener('click', function() {
    earphonesTXT.style.display="none";
  })

}
