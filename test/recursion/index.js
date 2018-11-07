/* global it, describe */
const assert = require('assert');
const recursion = require('../../src/recursion/recursion');

const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};
const expected = [[100], [90, 120], [70, 99, 110, 130]];

const tree2 = {
  value: 100,
  left: {
    value: 90,
    left: { value: 70 },
    right: { value: 99, left: { value: 30, left: { value: 45, right: { value: 195 } } } },
  },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};
const expected2 = [[100], [90, 120], [70, 99, 110, 130], [30], [45], [195]];

describe('recursion', () => {
  it('Default test', () => {
    assert.deepEqual(recursion(tree), expected);
  });

  it('Unballanced tree', () => {
    assert.deepEqual(recursion(tree2), expected2);
  });

  it('Single element tree', () => {
    assert.deepEqual(recursion({ value: 1 }), [[1]]);
  });

  it('Empty object', () => {
    assert.deepEqual(recursion({}), []);
  });

  it('Exception case', () => {
    assert.throws(recursion, Error, 'Invalid input argument');
  });

  it('Non number values', () => {
    assert.deepEqual(recursion({ value: '1' }), [['1']]);
  });
});
