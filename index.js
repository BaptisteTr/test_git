var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Projet TP' });
  
});

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Créer un conflit

/* GET home page. */
router.post('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });


module.exports = router;
