var move = function(element, row, col) {
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
                alert(data.winner);
                element.innerHTML = data.piece;
            }
        });
        
};