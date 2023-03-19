// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let colorButtons = document.querySelectorAll(".color");

let currentColor = document.querySelector("#current-color");

let cells = document.querySelectorAll(".cell");

let clearButton = document.querySelector("#clear-button");

for (const colorButton of colorButtons) {
  colorButton.addEventListener("click", (event) => {
    console.log(event.target.style.background);
    currentColor.style.background = event.target.style.background;
  });
}

for (const cell of cells) {
  cell.addEventListener("click", (event) => {
    event.target.style.background = currentColor.style.background;
  });
}

clearButton.addEventListener("click", () => {
  for (const cell of cells) {
    cell.style.background = "white";
  }
});
