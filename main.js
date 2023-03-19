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
         // ONE COLOR SELECTED
// colorButtons[0].addEventListener("click", (event) => {
//     // console.log(event.target.style.background)
//     currentColorSquare.style.background = event.target.style.background
//   }) 

// LOOPS THROUGH EVERY COLOR

// for (const colorButton of colorButtons){
//   colorButton.addEventListener("click", (event) => {
//   currentColorSquare.style.background = event.target.style.background
//   })} 
  colorButtons.forEach(colorButton =>
    colorButton.addEventListener("click", (event) => {
    currentColorSquare.style.background = event.target.style.background
  })) //

let blankCells = document.querySelector(".cell")

for (const colorCell of blankCells){
    colorCell.addEventListener("click", (event) => {
      colorCell.style.background = currentColorSquare.style.background
})}

// blankCells.forEach(colorCell => {
//     colorCell.addEventListener("mouseenter", (event) => {
//       colorCell.style.background = currentColorSquare.style.background
//   })}) //