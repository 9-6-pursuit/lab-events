// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!

//When you click on a .cell, its background should change to match the background of #current-color
    let cells = document.querySelectorAll(".cell")
    //console.log(cells)
    cells.forEach((cell) => {
      //console.log(cell)
      cell.addEventListener("mousedown", () => {
      cell.style.background = currColor.style.background
    });
  });
//COLORS USES EVENT AS A PARAM; CELLS DOES NOT BUT BOTH LISTENERS WORK

//Create a button that, when clicked, resets all cells so that they all have a background of white
const resetButton = document.createElement("div")
resetButton.textContent = "reset 🔁"
document.querySelector("#canvas").append(resetButton)
resetButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = "none"))
});
//Create a button that, when clicked, changes all of the cells so that they match the #current-color element's background
const anotherButton = document.createElement("div");
anotherButton.textContent = `change 🖌️ `;
document.querySelector("#canvas").append(anotherButton);
anotherButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = currColor.style.background));
});
//Create a button with a new color(s)
const addColor = document.createElement('div');
addColor.setAttribute("class", "color")
addColor.style.background = 'lightblue';
//console.log(addColor.style.background)
document.querySelector('#palette').append(addColor);

let otherColors = ['#ff0000', 'rgb(165, 42, 42)', 'rgb(255, 192, 203)', 'rgb(230, 230, 250)', 'rgb(0, 128, 128)']
for (const color of otherColors) {
  const div = document.createElement("div")
  div.classList.add("color")
  div.style.background = color
  // palette.append(div)
  document.querySelector("#palette").append(div)
};
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
  });


