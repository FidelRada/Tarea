var express = require('express');
var router = express.Router();
const personaController = require("../controllers/personaController");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Bienvenido");
});

module.exports = router;
