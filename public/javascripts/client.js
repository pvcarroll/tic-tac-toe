var move = function(row, col) {
        alert("boardClicked: " + row + " " + col);

        var coordinates = {
            row: row,
            col: col
        };
        $.ajax({
            type: "POST",
            data: JSON.stringify(coordinates),
            contentType: "application/json",
            success: function(data) {
                alert("POST SUCCESS");
                alert(data);
                alert("data.piece = " + data.piece);
            }
        });
};