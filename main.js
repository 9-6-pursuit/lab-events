// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let colorButtons = document.querySelectorAll(".color");
console.log(colorButtons);

let currentColor = document.querySelector("#current-color");
console.log(currentColor);

for (const colorButton of colorButtons) {
  // console.log(colorButton)
  colorButton.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.style);
    // console.log(event.target.style.background)
    // event.target.style.background = "purple";
    // currentColor.style.background = "blue" /* This turns the square above the color palette into the color you logged */
    currentColor.style.background = event.target.style.background /* This turns the square above the color palette into the color you click on */
  })
}

let colorCells = document.querySelectorAll(".cell");

for (const cell of colorCells) {
  // console.log(cell);
  cell.addEventListener("click", (event) => {
  // cell.addEventListener("mouseenter", (event) => { /* This lets you color if you hover over the cell */
    cell.style.background = currentColor.style.background;
  })
}