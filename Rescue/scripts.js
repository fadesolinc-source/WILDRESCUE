/*
Name: Fadekemi Mariam Arowolo
File Name: Wild Rescues
Date: 2/25/2026
DM130 Project 2
*/

// Global variables
var answer = document.getElementById("answer");
var question = document.getElementById("questions");

// Hamburger menu function
function menu() {
  var links = document.getElementById("menu-links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

// FAQ Answer Functions

function ans1() {
  answer.innerHTML =
    "We rescue all types of wildlife including birds, mammals, and reptiles.";
}

function ans2() {
  answer.innerHTML =
    "You can volunteer by filling out the contact form on our website.";
}

function ans3() {
  answer.innerHTML =
    "We rely on donations and community support to fund our rescue efforts.";
}

function ans4() {
  answer.innerHTML =
    "All animals are rehabilitated and released back into their natural habitat.";
}
