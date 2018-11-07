const assert = require('assert');
const sumOfOther = require('../../src/sumOfOther/sumOfOther');

describe('sumOfOther', () => {
  it('Test 1', () => {
    assert.equal(JSON.stringify(sumOfOther([2, 3, 4, 1])), JSON.stringify([8, 7, 6, 9]));
  });

  it('Test 2', () => {
    assert.notEqual(JSON.stringify(sumOfOther([2, 3, 4, 0])), JSON.stringify([8, 7, 6, 9]));
  });

  it('Test 3', () => {
    assert.throws(sumOfOther, Error, "Invalid argument exception. Expected array");
  });
});