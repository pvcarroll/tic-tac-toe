var currentRound = 0;
var pieces = {
    x: "X",
    o: "O"
};
var board = [["", "", ""], ["", "", ""], ["", "", ""]];

function checkForWinner() {
    var match = false;
    var rowMatch, columnMatch, diagonalMatch, reverseDiagonalMatch;
    var rowValue, columnValue;
    var diagonalValue = board[0][0];
    var reverseDiagonalValue = board[0][board.length - 1];

    for (var i = 1; i < board.length; i++) {
        diagonalMatch = true;
        reverseDiagonalMatch = true;
        if (!diagonalValue || (board[i][i] !== diagonalValue)) {
            diagonalMatch = false;
        }
        if (!reverseDiagonalValue || (board[i][board.length - i - 1] !== reverseDiagonalValue)) {
            reverseDiagonalMatch = false;
        }
    }
    if (diagonalMatch || reverseDiagonalMatch) {
        return true;
    }
    for (var i = 0; i < board.length; i++) {
        rowMatch = true;
        columnMatch = true;
        rowValue = board[i][0];
        columnValue = board[0][i];
        for (var j= 1; j < board.length; j++) {
            if (!rowValue || (board[i][j] !== rowValue)) {
                rowMatch = false;
            }
            if (!columnValue || (board[j][i] !== columnValue)) {
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
        var moveData = {};
        var piece = ((currentRound % 2 === 0) ? pieces.x : pieces.o);
        moveData.piece = piece;
        board[row][col] = piece;
        moveData.winner = checkForWinner();
        console.log("round = " + currentRound);
        console.log("board: %j", board);
        currentRound++;
        return moveData;
    }
};