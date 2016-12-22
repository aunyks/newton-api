var express   = require('express');
var algebrite = require('algebrite');
var app       = express();

var operationMap = {
  run: algebrite.run,
  factor: function(expression){
    return algebrite.factor(expression).toString();
  },
  /*integrate: ,
  derive: ,*/
};

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:operation/:data', function(req, res){
  var computation = operationMap[req.params.operation](req.params.data);
  res.send({
    operation: req.params.operation,
    expression: req.params.data,
    result: computation
  });
});

app.listen(3000, function(){
  console.log('We\'re up at 3000!');
});
