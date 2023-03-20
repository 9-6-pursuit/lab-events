// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let colorButton = document.querySelectorAll(".color")

let currentColor = document.querySelector('#current-color')

for (const colors of colorButton) {
  colors.addEventListener('click',  (event) => {
    currentColor.style.background = event.target.style.background
  })
}

let cells = document.querySelectorAll(".cell")

for (const cell of cells) {
  cell.addEventListener('click', () => {
    cell.style.background = currentColor.style.background
  })
}
