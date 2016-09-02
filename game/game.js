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
        console.log("GAME");
        console.log(currentRound);
        console.log("row = " + row);
        console.log("col = " + col);
        currentRound++;
    }
};