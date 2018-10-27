/**
 * @param {Array} args numbers or function
 */
module.exports = function make(...args) {
  const sum = [];

  const calculate = function calculate(predicate) {
    return sum.slice(1).reduce(predicate, sum[0]);
  };

  const fun = function internal(...params) {
    for (let index = 0; index < params.length; index += 1) {
      if (typeof params[index] === 'number') {
        sum.push(params[index]);
      } else if (typeof params[index] === 'function') {
        return sum.length > 0 ? calculate(params[index]) : 0;
      }
    }
    return fun;
  };

  return fun.apply(this, args);
};
