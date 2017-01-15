var express   = require('express');
var metadelta    = require('metadelta');
var path      = require('path');
var app       = express();

var operationMap = {
  simplify: metadelta.simplify,
  factor: metadelta.factor,
  zeroes: metadelta.zeroes,
  integrate: metadelta.integrate,
  derive: metadelta.derive,
  tangent: function(expression){
    var data = expression.split('|');
    var at = parseInt(data[0]);
    var f = data[1];
    return metadelta.tangent(f, at);
  },
  area: function(expression){
    var split = expression.split('|');
    var f = split[1];
    var from = split[0].split(':')[0];
    var to   = split[0].split(':')[1];
    return '' + metadelta.areaUnder(f, { start: from, finish: to });
  }
};

// Send index.html when root route is accessed (<- homophones ftw!)
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// A dynamic API endpoint where we do our busy work
app.get('/:operation/:data', function(req, res){
  var f = operationMap[req.params.operation];

  if(f === undefined){
    res.send({
      error: 'Unknown operation'
    });
  } else {
    var computation = f(req.params.data);
    res.send({
      operation: req.params.operation,
      expression: req.params.data,
      result: computation
    });
  }
});
app.listen(3000, function(){
  console.log('We\'re up at 3000!');
});
