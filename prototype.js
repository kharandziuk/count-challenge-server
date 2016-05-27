var assert = require('assert');
var _ = require('lodash');
var seedrandom = require('seedrandom');

function getRandomInt(random, min, max) {
  return Math.floor(random * (max - min + 1)) + min;
}

function getRandomPhoneNumber(rnd) {
  var x = getRandomInt(rnd(), 0, Math.pow(10, 10));
  return _.pad(x, 10, '0');
}

var getRandomList = function(seed, size) {
  var rng = seedrandom(seed);
  return _.map(
    _.range(size),
    _.partial(getRandomPhoneNumber, rng)
  )
}

module.exports = getRandomList
