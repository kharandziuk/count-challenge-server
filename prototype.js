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

console.log(getRandomPhoneNumber(seedrandom('seed')));
var getRandomList = function(seed, count) {
  var rng = seedrandom(seed);
  return _.map(_.range(count), _.partial(getRandomPhoneNumber, rng))
}

assert.deepEqual(
    getRandomList('seed', 1000000),
    getRandomList('seed', 1000000)
)
console.log(
    getRandomList('seed', 10)
)
