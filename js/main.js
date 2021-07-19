const container = document.querySelector('.container');
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', clearGrid);

let n = 0;
let finalGrid = 0;
container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

for (let i = 0; i < finalGrid; i++) {
  const div = document.createElement('div');
  div.style.border = '1px solid gray';
  container.appendChild(div);
}

function clearGrid() {
  n = prompt('Enter a number between 1 and 64', 16);
  if (n < 1 || n != Number) {
  } else {
    finalGrid = n * n;
  }
}
