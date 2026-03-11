var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memes', { title: 'Menu de memes' });
});

router.get('/gatos', function(req, res, next) {
  res.render('gatos', { title: 'Memes de Gatos' });
});

module.exports = router;