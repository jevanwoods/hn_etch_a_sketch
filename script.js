const container = document.getElementById('gameContainer');
const slider = document.getElementById('slider');
slider.addEventListener('input', labelSlider);

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clearBoard);

const createBtn = document.getElementById('createBtn');
createBtn.addEventListener('click', createButton);

function createBoard (numberOfTiles) {
  const height = 660 / numberOfTiles;
  for (let i = 0; i < numberOfTiles ** 2; i++) {
    let tile = document.createElement('div');
    tile.classList.remove();
    tile.classList.add('tile');
    tile.style.height = height + 'px';
    tile.style.width = height + 'px';
    tile.addEventListener('mouseover', () => tile.classList.add('newColor'));
    container.appendChild(tile);
  }
}

function clearBoard() {
  const tiles = document.querySelectorAll('.newColor');
  tiles.forEach((tile) => {
    tile.classList.remove('newColor');
  });
}

function removeTiles () {
  const tiles = document.querySelectorAll('.tile')
  tiles.forEach((tile) => {
    tile.remove();
  });
}

function createButton () {
  let numberOfTiles = slider.value;
  removeTiles();
  createBoard(numberOfTiles);
  console.log('createButton ran');
}

function labelSlider() {
  let value = document.getElementById('slider').value;
  document.getElementById('sliderLabel').textContent = value;
  console.log('label slider ran');
}

createBoard(16);
