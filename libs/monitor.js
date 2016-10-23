var  Tail = require('tail').Tail;
var fileToTail = "~/.bash_history";
var tail = new Tail(fileToTail);

module.exports = function(){
tail.on("line", function(data) {
  console.log(data);
});
tail.on("error", function(error) {
  console.log(error);
});
};
