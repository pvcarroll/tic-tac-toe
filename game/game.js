var currentRound = 0;
var pieces = {
    x: "X",
    o: "O"
};
var board = [["", "", ""], ["", "", ""], ["", "", ""]];

function checkForWinner() {

}

module.exports = {
    processMove: function(row, col) {
        var piece = ((currentRound % 2 === 0) ? pieces.x : pieces.o);
        currentRound++;
        return piece;
    }
};