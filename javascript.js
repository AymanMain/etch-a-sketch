const grid = document.createElement("div");
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.backgroundColor = "red";

let gridSize = 16;

const body = document.querySelector("body");
const bodydiv = document.createElement("div");
const input = document.createElement("input");

bodydiv.appendChild(grid);
body.appendChild(bodydiv);

input.addEventListener("click", () => updateGrid(input.textInput.value));
function updateGrid(gridSizeNew) {
  if (gridSizeNew < gridSize) {
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  } else if (gridSizeNew > gridSize) {
    for (var i = 0; i < 2 * (gridSizeNew - gridSize); i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
}

//create basic grid element 16x16
function createIntialGrid() {
  for (var i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = "x";
    cell.style.padding = "5px";
    grid.appendChild(cell);
  }
}

//Needs Flex
createIntialGrid();
