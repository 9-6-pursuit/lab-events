// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let colorButtons = document.querySelectorAll(".color")
//console.log(colorButtons);

let currentColorSquare = document.querySelector("#current-color")
//console.log(currentColorSquare);



for (const colorbutton of colorButtons) {
  colorbutton.addEventListener("click", (event) => {
    //console.log(event.target);
    //console.log(event.target.style.background);
    //event.target.style.background = "blue"
    currentColorSquare.style.background = colorbutton.style.background
    //currentColorSquare.style.background = event.target.style.background // gets the same color target//
  })
}

let colorCells = document.querySelectorAll(".cell")

for (const cell of colorCells) {
  cell.addEventListener("click", (event) => {
    //console.log(event.target);
    cell.style.background = currentColorSquare.style.background
  })
}