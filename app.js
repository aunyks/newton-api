var express   = require('express');
var algebrite = require('algebrite');
var path      = require('path');
var app       = express();

var operationMap = {
  simplify: algebrite.run,
  factor: function(expression){
    return algebrite.factor(expression).toString();
  },
  /*expand: function(expression){
    return algebrite.expand(expression);
  },
  contract: function(expression){
    return algebrite.contract(expression).toString();
  },*/
  integrate: function(expression){
    return algebrite.integral(expression).toString() + ' + c';
  },
  derive: function(expression){
    return algebrite.derivative(expression).toString();
  },
};

// Send index.html when root route is accessed (<- homophones ftw!)
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// A dynamic API endpoint where we do our busy work
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
