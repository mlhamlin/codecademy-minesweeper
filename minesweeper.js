const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const board = [];
    for (let i = 0; i < numberOfRows; i++) {
        const row = [];
        for (let j = 0; j < numberOfColumns; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    const board = [];
    for (let i = 0; i < numberOfRows; i++) {
        const row = [];
        for (let j = 0; j < numberOfColumns; j++) {
            row.push(null);
        }
        board.push(row);
    }

    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
        //Note this code can place bombs over other bombs resulting in less bombs total
        // this will be fixed later
        const randomRowIndex = Math.floor(Math.random() * numberOfRows);
        const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }

    return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3, 4);
const bombBoard = generateBombBoard(3, 4, 5);

console.log("Player Board: ");
printBoard(playerBoard);
console.log("Bomb Board: ");
printBoard(bombBoard);