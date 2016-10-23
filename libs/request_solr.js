var express = require('express');
var router = express.Router();
var request = require('request');

module.exports = function(keyword, cb) {
  var req = function(req, res, next) {
    var options = {
      url:'http://192.168.122.111:8983/solr/recommend/select?q=text:*'+keyword+'*&rows=1&wt=json',
      method: 'GET'
    }
    request(options, function(error, response, body){
      if(error) cb('error');
      else cb(body);
    });
  };
  req();
};
