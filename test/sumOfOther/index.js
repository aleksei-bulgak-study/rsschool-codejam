var assert = require('assert');
var sumOfOther = require('../../src/sumOfOther/index');

console.log(sumOfOther)

describe('sumOfOther', function () {
  it('Test 1', function () {
    assert.equal(JSON.stringify(sumOfOther([2, 3, 4, 1])), JSON.stringify([8, 7, 6, 9]));
  });

  it('Test 2', function () {
    assert.notEqual(JSON.stringify(sumOfOther([2, 3, 4, 0])), JSON.stringify([8, 7, 6, 9]));
  });

  it('Test 3', function () {
    assert.throws(sumOfOther, Error, "Invalid argument exception. Expected array");
  });
});