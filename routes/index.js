var express = require('express');
var game = require("../game/game.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tic-Tac-Toe' });
});

router.post("/", function(req, res, next) {
    var moveData = game.processMove(req.body.row, req.body.col);
    res.json(moveData);
    // res.render("index", { title: "Tic-Tac-Toe" });
});

router.post("/reset", function(req, res, next) {
    game.resetGame();
    res.render("index");
});

module.exports = router;