var move = function(element, row, col) {

    var coordinates = {
        row: row,
        col: col
    };
    if (!element.innerHTML) {
        $.ajax({
            type: "POST",
            data: JSON.stringify(coordinates),
            contentType: "application/json",
            success: function(data) {
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
    $.ajax({
        type: "POST",
        data: "",
        url: "/reset",
        contentType: "application/json",
        success: function(data) {
            window.location.reload(false);
        }
    });
};