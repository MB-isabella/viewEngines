var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Música Brasileira' });
});

router.get('/renatorusso', function(req, res, next) {
  res.render('renatorusso', { title: 'Renato Russo' });
});

router.get('/bituca', function(req, res, next) {
  res.render('bituca', { title: 'Milton Nascimento' });
});

router.get('/elisregina', function(req, res, next) {
  res.render('elisregina', { title: 'Elis Regina' });
});

router.get('/djavan', function(req, res, next) {
  res.render('djavan', { title: 'Djavan' });
});

module.exports = router;