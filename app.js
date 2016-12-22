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

// TODO: Do something on the root route <- haha, homophones
app.get('/:operation/:data', function(req, res){
  var computation = operationMap[req.params.operation](req.params.data);
  var final = {
    operation: req.params.operation,
    expression: req.params.data,
    result: computation
  };
  res.send(final);
});

app.listen(3000, function(){
  console.log('We\'re up at 3000!');
});
