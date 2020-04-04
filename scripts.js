//user interaction button
let userButton = document.createElement("button");
userButton.setAttribute("id", "userInterfaceButton");
userButton.textContent = "Reset Grid";
userButton.addEventListener("click", function(){userButtonClick()});
document.body.appendChild(userButton);

//setup etch-a-sketch grid space
let gridContainer = document.querySelector("#gridContainer");
for (let i = 1; i < 257; i++) {
  let gridElement = document.createElement("div");
  let elementID = "gridElement" + i;
  gridElement.classList.add("gridElement");
  gridElement.setAttribute("id", elementID); 
  gridElement.addEventListener("mouseenter", function(){mouseEnter(elementID)});
  gridContainer.appendChild(gridElement);
}

function mouseEnter (elementID) {
  let domElement = document.getElementById(elementID);
  domElement.style.background = "black";
}

function userButtonClick () {
  //clear out previous sketch
  let gridElements = document.querySelectorAll(".gridElement");
  gridElements.forEach(element => {
    gridContainer.removeChild(element);
  });
  //prompt user for new grid size
  let newGridWidth = prompt("Enter new resolution of sketch space", "25");
  newGridWidth = parseInt(newGridWidth,10);
  NewElementCreationLoopMax = newGridWidth * newGridWidth + 1;
  //create new grid elements
  gridContainer.style.gridTemplateColumns = "repeat(" + `${newGridWidth}`+ ",1fr)";
  for (let i = 1; i < NewElementCreationLoopMax; i++) {
    let gridElement = document.createElement("div");
    let elementID = "gridElement" + i;
    gridElement.classList.add("gridElement");
    gridElement.setAttribute("id", elementID); 
    gridElement.addEventListener("mouseenter", function(){mouseEnter(elementID)});
    gridContainer.appendChild(gridElement);
  }
}