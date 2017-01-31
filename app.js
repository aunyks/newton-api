var app        = require('express')();
var operations = require('./operations.js');
var path       = require('path');

// Send index.html when root route is accessed (<- homophones ftw!)
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// A dynamic API endpoint where we do our busy work
app.get('/:operation/:data', function(req, res){

  // Get the math function operation based
  // on the operation that we're given
  var f = operations[req.params.operation];

  // If the url isn't malformed, send our response
  // with an answer. If not, send an error response
  if(f === undefined){

    res.send({
      error: 'Unknown operation'
    });

  } else {

    // The result from passing the data parameter
    // to the operation function
    var computation = f(req.params.data);
    res.send({
      operation: req.params.operation,
      expression: req.params.data,
      result: computation
    });
  }
});

// Launch the server!
app.listen(3000, function(){
  console.log('We\'re up at 3000!');
});
