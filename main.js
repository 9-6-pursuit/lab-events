// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!

//When a color is clicked in the #palette, the #current-color element should have its background changed to that color
let colors = document.querySelectorAll(".color")
//console.log(colors)
let currColor = document.querySelector("#current-color")
colors.forEach((color) => { 
  //console.log(color)
  color.addEventListener("mousedown", (event) => {
    currColor.style.background = event.target.style.background
    // currColor.style.background = color.style.background
  })
})
//When you click on a .cell, its background should change to match the background of #current-color
    let cells = document.querySelectorAll(".cell")
    //console.log(cell)
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
      cell.style.background = currColor.style.background
    })
  })
//COLORS USES EVENT AS PARAM CELLS DOES NOT BUT BOTH FUNCTION

