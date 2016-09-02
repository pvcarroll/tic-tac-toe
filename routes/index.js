var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tic-Tac-Toe' });
});

router.post("/", function(req, res, next) {
    console.log("/ POST");
    console.log("req = " + req.body);
    res.render("index", { title: "Tic-Tac-Toe" });
});

module.exports = router;
