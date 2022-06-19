var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trabajo de Taller de Programación 2: Examenes online' });
});

module.exports = router;