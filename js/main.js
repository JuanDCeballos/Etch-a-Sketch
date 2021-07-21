const grid = document.querySelector('.grid');
const changeSize = document.getElementById('changeSize');
const eraser = document.getElementById('eraser');
const rgbColor = document.getElementById('rgbColor');
const grayColor = document.getElementById('gray');

// let finalGrid = 2 * 2;
// grid.style.gridTemplateColumns = `repeat(2, 1fr)`;

// let div = undefined;

// for (let i = 0; i < finalGrid; i++) {
//   const div = document.createElement('div');
//   // div = document.createElement('div');
//   div.style.border = '1px solid black';
//   grid.append(div);
// }

grid.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'gray';
});

grayColor.addEventListener('click', () => {
  grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'gray';
  });
});

rgbColor.addEventListener('click', () => {
  grid.addEventListener('mouseover', (e) => {
    let r = () => (Math.random() * 256) >> 0;
    e.target.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`;
  });
});

eraser.addEventListener('click', () => {
  grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = '#f2f2f2';
  });
});

changeSize.addEventListener('click', () => {
  let numberOfGrids = prompt('Enter a number between 1 and 64', 16);
  let finalNumberOfGrids = numberOfGrids * numberOfGrids;
  for (let i = 0; i < finalNumberOfGrids; i++) {
    const divGrid = document.createElement('div');
    divGrid.style.border = '1px solid black';
    grid.append(divGrid);
  }
  grid.style.gridTemplateColumns = `repeat(${numberOfGrids}, 1fr)`;
});
