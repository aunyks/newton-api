var express   = require('express');
var algebrite = require('algebrite');
var path      = require('path');
var app       = express();

var zeroes = function(oExpression){
  var _zeroes = [];
  // x(x+1)(x+2) -> [ x, x+1), x+2) ]
  expression = oExpression.split(' ').join('').split('(');
  expression.forEach(function(item){
    var xIdx = item.indexOf('x');
    // ax+b=0, so x=-b/a
    var a = item.substring(xIdx-1, xIdx);
    var b = item.substring(xIdx+1, xIdx+3);

    if(a === '')
      a = 1;
    if(b === '')
      b = 0;
    _zeroes.push(-b/a);
  });
  if(oExpression.charAt(0) === '(')
    _zeroes = _zeroes.slice(1);
  return JSON.stringify(_zeroes);
};

var tangent = function(rawData){
  // 2|x^3 -> Find tangent line of x^3 at x = 2
  var data = rawData.split('|');
  var x = data[0];
  var expression = data[1];

  // f(x) - xf'(x) = b
  var fx = parseInt(algebrite.run(expression.split('x').join(x)));
  var fp = algebrite.derivative(expression).toString();
  var fpx = algebrite.run(fp.split('x').join(x));
  var b = fx - parseInt(x) * parseInt(fpx);

  return fpx + ' x + ' + b;
};

var operationMap = {
  simplify: algebrite.run,
  factor: function(expression){
    return algebrite.factor(expression).toString();
  },
  zeroes: function(expression){
    return zeroes(algebrite.factor(expression).toString());
  },
  integrate: function(expression){
    return algebrite.integral(expression).toString() + ' + C';
  },
  derive: function(expression){
    return algebrite.derivative(expression).toString();
  },
  tangent: function(data){
    return tangent(data);
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
