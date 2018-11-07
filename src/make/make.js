/**
 * @param {Array} args numbers or function
 */
module.exports = function make(...args) {
  const sum = [];

  const calculate = predicate => sum.reduce(predicate);

  const fun = (...params) => {
    for (const arg of params) {
      if (typeof arg === 'number') {
        sum.push(arg);
      } else if (typeof arg === 'function') {
        return sum.length > 0 ? calculate(arg) : 0;
      }
    }
    return fun;
  };

  return fun.apply(this, args);
};
