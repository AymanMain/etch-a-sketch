////////////////////////////////////////////////////////////////
// DOM Elements
const body = document.querySelector("body");

/// Grid DOM
const grid = document.createElement("div");
grid.classList.add("grid");
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.backgroundColor = "red";

/// Input DOM
const input = document.createElement("input");
input.classList.add("size-input");
const inputLabel = document.createElement("label");
inputLabel.classList.add("input-label");

input.type = "range";
input.min = "1";
input.max = "64";
input.value = "16";

input.addEventListener("click", () => {
  createGrid(input.value);
});

/// Color Picker
const color = document.createElement("input");
color.classList.add("color");
color.type = "color";

/// Body Div DOM
const bodyDiv = document.createElement("div");
bodyDiv.classList.add("bodyDiv");

bodyDiv.appendChild(input);
bodyDiv.appendChild(inputLabel);
bodyDiv.appendChild(color);
bodyDiv.appendChild(grid);

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
  const cellSize = 600 / gridSize;
  for (var i = 0; i < gridSize; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    for (var j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.height = "${cellSize}px";
      cell.style.width = "${cellSize}px";
      cell.style.padding = "5px";

      // Direct color change on mousedown
      cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = color.value;
      });

      // Change color on mouseover when mouse button is pressed
      cell.addEventListener("mouseover", () => {
        if (isMouseDown) {
          cell.style.backgroundColor = color.value;
        }
      });
      line.appendChild(cell);
    }
    grid.appendChild(line);
  }
}

// Initial Render
createGrid(16);
