var express = require('express');
var game = require("../game/game.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tic-Tac-Toe' });
});

router.post("/", function(req, res, next) {
    game.processMove(req.body.row, req.body.col);
    console.log("/ POST");
    console.log("req = %j", req);
    console.log("req.body = %j", req.body);
    res.render("index", { title: "Tic-Tac-Toe" });
});

module.exports = router;
