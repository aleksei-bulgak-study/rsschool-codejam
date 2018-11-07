/**
 * @param {Array} args numbers or function
 */
module.exports = function make(...args) {
  const sum = [];

  const calculate = predicate => sum.reduce(predicate);

  const fun = (...params) => {
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
