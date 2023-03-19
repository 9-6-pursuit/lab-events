// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let colorButtons = document.querySelectorAll(".color") 
let currentColorSquare = document.querySelector("#current-color")

for (const colorButton of colorButtons) {
  colorButton.addEventListener("click", (event) => {
    currentColorSquare.style.background = event.target.style.background
  })
}
let colorCells = document.querySelectorAll(".cell")

for (const cell of colorCells) {
  cell.addEventListener("click", (event) => {
   cell.style.background = currentColorSquare.style.background
  })
}