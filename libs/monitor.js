var  Tail = require('tail').Tail;
var fileToTail = ".bash_history";
var tail = new Tail(fileToTail);
var request = require('request');

module.exports = function(){
tail.on("line", function(data) {
  console.log(data);
    var options = {
      url:'http://0.0.0.0:8080/search/'+data,
      method: 'GET'
    }
    request(options, function(error, response, body){
      if(error) console.log(error);
      else console.log(body);
    });
});
tail.on("error", function(error) {
  console.log(error);
});
};
