// jshint esversion: 6

// define the onclick handlers

function btn1Handler() {
  //append new content to textarea, using the assignment operator
  document.getElementById("outBox").value = document.getElementById("outBox").value + "Ahoy! ";
}

function btn2Handler() {
  //append new content to textarea, using the shorthand assignment operator
  document.querySelector("textarea").value += "Ya lubber! ";
}

function btn3Handler() {
  //append new content to textarea, using the assignment operator
  document.getElementById("outBox").value = document.getElementById("outBox").value + "Avast! ";
}

/* register the onclick handlers after the page loads
   and the DOM is complete
 */
window.onload = function() {
  //select the button and register the handler
  document.getElementById("b1").addEventListener("click", btn1Handler);
  document.getElementById("b2").addEventListener("click", btn2Handler);
  document.getElementById("b3").addEventListener("click", btn3Handler);
};