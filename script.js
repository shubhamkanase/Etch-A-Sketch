
const container = document.querySelector('#grid-container');

function createGrid(size) {
  // clear previous grid
  container.innerHTML = '';

  // set number of rows and columns
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // create cells
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

function createGrid8() {
  createGrid(8);
}

function createGrid16() {
  createGrid(16);
}

function createGrid32() {
  createGrid(32);
}
