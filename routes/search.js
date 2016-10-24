var express = require('express');
var router = express.Router();
var request_solr = require('../libs/request_solr');
var app = require('../app.js');

/* GET search page. */
router.get('/:keyword', function(req, res, next) {
  var param = req.params.keyword;
  console.log('param ',param);
  var getReco = function(param) {
    var body = request_solr(param, function(data) {
      if(data === 'error') res.send('error');
      else {
        app.io.emit('monitor', data);
        res.render('index', { title: 'Express', data: data });
      }
    });
  }
  getReco(param);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', data: 'Recommendations'});
});

module.exports = router;
