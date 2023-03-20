// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
var select = document.getElementsByClassName("color");
var current = document.getElementById("current-color");
var color;
for (const iterator of select) {
  iterator.addEventListener('click',
  function(){
    color = this.getAttribute("style");
    current.setAttribute("style",color)
  });
}

var selectcell = document.getElementsByClassName("cell");
for (const iterator of selectcell) {
  iterator.addEventListener('click',
  function(){
    iterator.setAttribute("style",color)
  });
}