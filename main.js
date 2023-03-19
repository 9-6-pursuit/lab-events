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

let currentColor = document.querySelector("#current-color")
console.log(currentColor);

/* colorButtons[0].addEventListener("click",(event) => {
  />console.log(event.target); >>> the target of the event will be the color button - this is the "thing" we are clicking on
  
  console.log(event.target.style.background);

  currentColor.style.background = event.target.style.background 
  />the code above allows us to change the color in the square to the color that we click on thats the click event

   event.target.style.background = "purple";
   /> this code changes the current color to purple
})
*/

//now let's allow this rule to all the rest of the colors we can do this by using a forLoop

for (const colorButton of colorButtons) {
  colorButton.addEventListener("click", (event) => {
    currentColor.style.background = event.target.style.background;
  })
}

//to be clear, the event is the "click" and the target is the element we are clicking on. 

let colorCellsArray = document.querySelectorAll(".cell"); 

for (const cell of colorCellsArray) {
  cell.addEventListener("click", (event) => {
    cell.style.background = currentColor.style.background;
  })
}