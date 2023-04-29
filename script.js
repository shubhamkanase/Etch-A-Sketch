
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


// const black = document.querySelector("#black");

// black.addEventListener('mousemove', blackColor);



// function blackColor(e){

//   const cell = document.querySelector('cell');
//   cell.style.backgroundcolor
// }



// const black = document.querySelector('#black');
// black.addEventListener('click', function(){
//     let val = document.getElementsByClassName('cell').value;
//     let cell = grid.children;
//     for (let i = 0; i < val*val; i++) {
//         cell[i].addEventListener('mouseover', function(event){
//             event.target.style.backgroundColor = 'black';
//         })
//     }
// });

// black.addEventListener('click', () => {
//   cell.forEach(cell => {
//     cell.addEventListener('mousemove', () => {
//       cell.style.backgroundColor = 'black';
//     });
//   });
// });



const blackBtn = document.getElementById('black');

blackBtn.addEventListener('click', () => {
  const cells = document.querySelectorAll('#grid-container div');
  cells.forEach(cell => {
    cell.addEventListener('mousemove', () => {
      cell.style.backgroundColor = 'black';
    });
  });
});

function randomNum() {
  let letters = '0123456789ABCDEF';
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const rainbow = document.getElementById('rainBow');

rainbow.addEventListener('click', () => {
  const cells = document.querySelectorAll('#grid-container div');
  cells.forEach(cell => {
    cell.addEventListener('mousemove', () => {
      cell.style.backgroundColor = randomNum();
    });
  });

});