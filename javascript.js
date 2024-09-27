////////////////////////////////////////////////////////////////
// DOM Elements
const body = document.querySelector("body");

/// Grid DOM
const grid = document.createElement("div");
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.backgroundColor = "red";

/// Input DOM
const input = document.createElement("input");
const inputLabel = document.createElement("label");

input.type = "range";
input.min = "1";
input.max = "64";
input.value = "16";

input.addEventListener("click", () => {
  createGrid(input.value);
});

/// Body Div DOM
const bodyDiv = document.createElement("div");
bodyDiv.appendChild(grid);
bodyDiv.appendChild(input);
bodyDiv.appendChild(inputLabel);

//
body.appendChild(bodyDiv);
///////////////////////////////////////////////////////
let isMouseDown = false; // Track if the mouse button is pressed
// Create the initial grid 16*16
function createGrid(gridSize) {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  inputLabel.textContent = gridSize + " x " + gridSize;
  document.addEventListener("mousedown", () => (isMouseDown = true));
  document.addEventListener("mouseup", () => (isMouseDown = false));
  console.log(isMouseDown);
  for (var i = 0; i < gridSize; i++) {
    const line = document.createElement("div");
    for (var j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.style.padding = "5px";

      // Direct color change on mousedown
      cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = "green";
      });

      // Change color on mouseover when mouse button is pressed
      cell.addEventListener("mouseover", () => {
        if (isMouseDown) {
          cell.style.backgroundColor = "green";
        }
      });
      line.appendChild(cell);
    }
    grid.appendChild(line);
  }
}
// Add hover effect to cells

// Initial Render
createGrid(16);
