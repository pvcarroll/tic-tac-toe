var gameNumber;

var move = function(element, row, col) {

    var data = {
        row: row,
        col: col,
        gameNumber: gameNumber
    };
    if (!element.innerHTML) {
        $.ajax({
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data) {
                gameNumber = data.gameNumber;
                if (data.winner) {
                    $("#messageBanner").text(data.piece + " WINS!");
                } else if (data.tie) {
                    $("#messageBanner").text("TIE");
                } else {
                    var turnMsg;
                    if (data.piece === "X") {
                        turnMsg = "O's turn";
                    } else {
                        turnMsg = "X's turn";
                    }
                    $("#messageBanner").text(turnMsg);
                }
                element.innerHTML = data.piece;
            }
        });
    }
};

var resetBoard = function() {
    var data = {gameNumber: gameNumber};
    $.ajax({
        type: "POST",
        data: JSON.stringify(data),
        url: "/reset",
        contentType: "application/json",
        success: function(data) {
            window.location.reload(false);
        }
    });
};