module.exports = function make() {
  let sum = [];
  const fun = function internal() {
    for (let index = 0; index < arguments.length; index++) {
      if (typeof arguments[index] === 'number') {
        sum.push(arguments[index]);
      } else if (typeof arguments[index] === 'function') {
        return sum.length > 0 ? calculate(arguments[index]) : 0;
      }
    }
    return fun;
  }

  const calculate = function (predicate) {
    return sum.slice(1).reduce(predicate, sum[0]);
  }

  return fun.apply(this, arguments);
}