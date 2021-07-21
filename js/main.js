const grid = document.querySelector('.grid');
const changeSize = document.getElementById('changeSize');
const eraser = document.getElementById('eraser');
const rgbColor = document.getElementById('rgbColor');
const grayColor = document.getElementById('gray');

let finalGrid = 16 * 16;
grid.style.gridTemplateColumns = `repeat(16, 1fr)`;

for (let i = 0; i < finalGrid; i++) {
  const div = document.createElement('div');
  div.style.border = '1px solid black';
  div.className = 'div-grid';
  grid.append(div);
}

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
  if (numberOfGrids <= 0 || isNaN(numberOfGrids)) {
    alert('Type a number between 1 and 64');
  } else {
    let finalNumberOfGrids = numberOfGrids * numberOfGrids;
    let divsToRemove = document.getElementsByClassName('div-grid');
    while (divsToRemove.length > 0) {
      let divsRemove = divsToRemove[0];
      divsRemove.parentNode.removeChild(divsRemove);
    }
    let divsToRemoveTwo = document.getElementsByClassName('div-grid-two');
    while (divsToRemoveTwo.length > 0) {
      let divsRemoveTwo = divsToRemoveTwo[0];
      divsRemoveTwo.parentNode.removeChild(divsRemoveTwo);
    }
    for (let i = 0; i < finalNumberOfGrids; i++) {
      const divGrid = document.createElement('div');
      divGrid.style.border = '1px solid black';
      divGrid.style.backgroundColor = '#f2f2f2';
      divGrid.className = 'div-grid-two';
      grid.append(divGrid);
    }
    grid.style.gridTemplateColumns = `repeat(${numberOfGrids}, 1fr)`;
  }
});
