const container = document.getElementById('gameContainer');

function clearBoard() {
  const tiles = document.querySelectorAll('.newColor');
  tiles.forEach((tile) => {
    tile.classList.remove('newColor');
  });
}

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clearBoard);

function createBoard (numberOfTiles) {
  for (let i = 0; i < numberOfTiles ** 2; i++) {
    let tile = document.createElement('div');
    tile.classList.remove
    tile.classList.add('tile');
    tile.addEventListener('mouseover', () => tile.classList.add('newColor'));
    container.appendChild(tile);
  }
  console.log('ran');
}

createBoard(16);
