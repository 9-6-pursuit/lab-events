


// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!



const currentColor  = document.querySelector("#current-color");
const cells         = document.querySelectorAll(".cell");
const paletteColors = document.querySelectorAll("#palette .color");

// Set initial current color
let currentBackgroundColor = "white";
    currentColor.style.backgroundColor = currentBackgroundColor;

// Change current color on palette click
paletteColors.forEach((color) => {
  color.addEventListener("click", () => {
    currentBackgroundColor = color.style.backgroundColor;
    currentColor.style.backgroundColor = currentBackgroundColor;
  });
});

// Fill cell with current color on cell click
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = currentBackgroundColor;
  });
});



