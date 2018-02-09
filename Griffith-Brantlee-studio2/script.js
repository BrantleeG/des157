'use strict';

console.log("reading info");

// document.addEventListener("DOMContentLoaded"), function(event) {}

/*Creating interactive elements*/
  console.log("it works!");
  var laptop = document.getElementById("laptop");
  var jordan = document.getElementById("jordan");
  var earphones = document.getElementById("earphones");
  var laptopTXT = document.getElementById("laptopTXT");
  var jordanTXT = document.getElementById("jordanTXT");
  var earphonesTXT = document.getElementById("earphonesTXT");
  var close = document.getElementById("close");

/*Increase size of image when moving mouse over*/
  laptop.addEventListener('mouseover', function() {
    laptop.style.webkitTransform = 'scale(1.2,1.2)';
  })

/*return image to normal size when mouse moves off*/
  laptop.addEventListener('mouseout', function() {
    laptop.style.webkitTransform = 'scale(1,1)';
  })

/*have text box appear when images are clicked*/
  laptop.addEventListener('click', function() {
    laptopTXT.style.display="block";
    jordanTXT.style.display="none";
    earphonesTXT.style.display="none";
  })

  jordan.addEventListener('mouseover', function() {
    jordan.style.webkitTransform = 'scale(1.2,1.2)';
  })

  jordan.addEventListener('mouseout', function() {
    jordan.style.webkitTransform = 'scale(1,1)';
  })

  jordan.addEventListener('click', function() {
    jordanTXT.style.display="block";
    laptopTXT.style.display="none";
    earphonesTXT.style.display="none";
  })

  earphones.addEventListener('mouseover', function() {
    earphones.style.webkitTransform = 'scale(1.2,1.2)';
  })

  earphones.addEventListener('mouseout', function() {
    earphones.style.webkitTransform = 'scale(1,1)';
  })

  earphones.addEventListener('click', function() {
    earphonesTXT.style.display="block";
    laptopTXT.style.display="none";
    jordanTXT.style.dispaly="none";
  })

/*close text box when the 'X' is clicked*/
  exit.addEventListener('click', function() {
    laptopTXT.style.display="none";
  })

  exit1.addEventListener('click', function() {
    jordanTXT.style.display="none";
  })

  exit2.addEventListener('click', function() {
    earphonesTXT.style.display="none";
  })
