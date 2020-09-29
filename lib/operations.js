var metadelta = require('@metadelta/core');

module.exports = {
  simplify: metadelta.simplify,
  factor: metadelta.factor,
  zeroes: metadelta.zeroes,
  integrate: metadelta.integrate,
  derive: metadelta.derive,
  cos: metadelta.cos,
  sin: metadelta.sin,
  tan: metadelta.tan,
  arccos: metadelta.arccos,
  arcsin: metadelta.arcsin,
  arctan: metadelta.arcsin,
  abs: metadelta.abs,
  log: function(expression){
    var base = expression.split('|')[0];
    var arg  = expression.split('|')[1];
    return metadelta.log(base, arg);
  },
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
