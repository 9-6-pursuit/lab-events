// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let colorButtons = document.querySelectorAll(".color")
console.log(colorButtons)

let currentColor = document.querySelector("#current-color")

// colorButtons.addEventListener('click', (event) => {
//   console.log(event.target.style.background)
//   currentColor.style.background = event.target.style.background
// })

colorButtons.forEach(colorbutton => colorbutton.addEventListener('click', (event) => {
  console.log(event.target.style.background)
  currentColor.style.background = event.target.style.background
})
)

let cellColors = document.querySelectorAll(".cell")


cellColors.forEach(cellColor => cellColor.addEventListener('click', (event) => {
  cellColor.style.background = currentColor.style.background
})
)