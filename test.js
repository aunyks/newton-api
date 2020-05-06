var req    = require('request'); 
var colors = require('colors');

// Start server
require('./app.js')

var newtonUrl = 'http://localhost:3000/';

function request(route, callback){ 
  req(newtonUrl + route, function (error, response, body) {
    var value = JSON.parse(body).result;
    callback(value);
  });
}


function assert(expected, route, name){
  expected = JSON.stringify(expected);
  request(route, function(result){
    result = JSON.stringify(result);

    if(expected !== result){
      console.log(`Warning: ${name} did not pass test!`.yellow);
      console.log(`Expected: ${expected}\nReceived: ${result}`.red);
    } else {
      console.log(`Test: ${name} passed test`.green);
    }
  }); 
}

// Assert that our functions give the proper output
// TODO: give functions more than one test case at a time
assert('2 x',           'simplify/x+x',      'Simplify');
assert('x (x + 2)',     'factor/x^2 + 2x',   'Factor');
assert('2 x + 2',       'derive/x^2 + 2x',   'Derive');
assert('1/3 x^3 + x^2', 'integrate/x^2 + 2x','Integrate');
assert([-2, 0],         'zeroes/x^2 + 2x',   'Zeroes');
assert('12 x + -16',    'tangent/2|x^3',     'Tangent');
assert('60',            'area/2:4|x^3',      'Area Under Curve');
assert('3',             'log/2|8',           'Logarithm');
assert('1/4 pi',        'arctan/1',          'Arctan');
