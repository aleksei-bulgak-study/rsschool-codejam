/**
 * Calculates sum of other elements of array
 * @param {Array} array 
 */
module.exports = function sumOfOther(array){
  if(!array || !Array.isArray(array)){
    throw new Error('Invalid argument exception. Expected array')
  }

  const sum = array.reduce((accumulator, current) => accumulator + current, 0);
  return array.map(current => sum - current);
}