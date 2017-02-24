var app        = require('express')();
var operations = require('./operations.js');
var path       = require('path');

// Enable CORS 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

    // Compute the requested calculation and respond.
    // If we cannot compute it properly (error thrown),
    // then tell the client
    try {

      // The result from passing the data parameter
      // to the operation function
      var computation = f(req.params.data);
      res.send({
        operation: req.params.operation,
        expression: req.params.data,
        result: computation
      });
    } catch (err) {

      // Record this error
      console.log(err);

      // Let the client know of our inability to
      // perform the requested calculation
      res.send({ error: 'Unable to perform calculation' });
    }
  }
});

// Launch the server!
app.listen(3000, function(){
  console.log('We\'re up at 3000!');
});
