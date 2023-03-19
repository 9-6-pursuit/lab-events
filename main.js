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

let cells = document.querySelectorAll(".cell");

for (const colorButton of colorButtons) {
  colorButton.addEventListener("click", (event) => {
    console.log(event.target.style.background);
    currentColor.style.background = event.target.style.background;
  });
}


