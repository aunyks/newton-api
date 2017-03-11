
// DISCLAIMER: NEWTON SERVER MUST BE RUNNING FIRST BEFORE THIS
// TEST SUITE FUNCTIONS PROPERLY
var req    = require('request'); 
var colors = require('colors');

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

/*
  ARITHMETIC FUNCTIONS (including trig)
*/
assert('2 x',      'simplify/x+x',     'Simplify');
assert('x (x + 2)','factor/x^2 + 2x',  'Factor');
