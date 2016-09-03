var gameState = {
    currentRound: 0,
    gameOver: false,
    pieces: { x: "X", o: "O" },
    board: [["", "", ""], ["", "", ""], ["", "", ""]]
}

function checkForWinner() {
    var match = false;
    var rowMatch, columnMatch;
    var diagonalMatch = reverseDiagonalMatch = true;
    var rowValue, columnValue;
    var diagonalValue = gameState.board[0][0];
    var reverseDiagonalValue = gameState.board[0][gameState.board.length - 1];

    for (var i = 1; i < gameState.board.length; i++) {
        if (!diagonalValue || (gameState.board[i][i] !== diagonalValue)) {
            diagonalMatch = false;
        }
        if (!reverseDiagonalValue || (gameState.board[i][gameState.board.length - i - 1] !== reverseDiagonalValue)) {
            reverseDiagonalMatch = false;
        }
    }
    if (diagonalMatch || reverseDiagonalMatch) {
        return true;
    }
    for (var i = 0; i < gameState.board.length; i++) {
        rowMatch = true;
        columnMatch = true;
        rowValue = gameState.board[i][0];
        columnValue = gameState.board[0][i];
        for (var j= 1; j < gameState.board.length; j++) {
            if (!rowValue || (gameState.board[i][j] !== rowValue)) {
                rowMatch = false;
            }
            if (!columnValue || (gameState.board[j][i] !== columnValue)) {
                columnMatch = false;
            }
        }
        if (rowMatch || columnMatch) {
            match = true;
        }
    }
    return match;
}

module.exports = {
    processMove: function(row, col) {
        if (gameState.gameOver) {
            return;
        }
        var moveData = {};
        var piece = ((gameState.currentRound % 2 === 0) ? gameState.pieces.x : gameState.pieces.o);
        moveData.piece = piece;
        gameState.board[row][col] = piece;
        moveData.winner = checkForWinner();
        if (!moveData.winner && (gameState.currentRound >= gameState.board.length * gameState.board.length - 1)) {
            moveData.tie = true;
        }
        if (moveData.winner || moveData.tie) {
            gameState.gameOver = true;
        }
        gameState.currentRound++;
        return moveData;
    },

    resetGame: function() {
        gameState.currentRound = 0;
        gameState.gameOver = false;
        gameState.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    }
};