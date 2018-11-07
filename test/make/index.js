const assert = require('assert');
const fun = require('../../src/make/make');

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}


describe('make function', () => {
  it("Test 1", () => {
    assert.equal(fun(15)(34, 21, 666)(41)(sum), 777);
  });

  it("Test 2", () => {
    assert.equal(fun(sum), 0);
  });

  it("Test 3", () => {
    assert.equal(fun(15, 2, multiply), 30);
  });

  it("Test 4", () => {
    assert.equal(fun(15)(2)(multiply), 30);
  });

  it("Test 5", () => {
    assert.equal(fun(15)(2)(1, 1, 2)(multiply), 60);
  });

  it("Test 6", () => {
    assert.equal(fun(5)(2)(2, 3, 4)(multiply), 240);
  });
});
