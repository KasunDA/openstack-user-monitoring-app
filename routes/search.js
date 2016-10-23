var express = require('express');
var router = express.Router();
var request_solr = require('../libs/request_solr');

/* GET search page. */
router.get('/:keyword', function(req, res, next) {
  var param = req.params.keyword;
  console.log('param ',param);
  var getReco = function(param) {
    var body = request_solr(param, function(data) {
      if(data === 'error') res.send('error');
      else res.send(data);
    });
  }
  getReco(param);
});

module.exports = router;
