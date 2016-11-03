var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Team Stratus', data: 'Welcome to Stratus' });
});

module.exports = router;
