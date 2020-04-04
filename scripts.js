let gridContainer = document.querySelector("#gridContainer")
for (let i = 1; i < 17; i++) {
  let div = document.createElement('div');
  div.textContent = "Grid Element " + i;
  gridContainer.appendChild(div); 
}