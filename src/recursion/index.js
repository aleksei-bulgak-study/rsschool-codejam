module.exports = function recursion(tree){
  if(!tree){
    throw new Error('Invalid input argument');
  }

  const array = [];
  let depth = 0;
  _internal(tree, depth);
  return array;

  function _internal(tree, depth) {
    if (tree && tree.value) {
      array[depth] ? array[depth].push(tree.value) : array[depth] = [tree.value];
      _internal(tree.left, depth + 1);
      _internal(tree.right, depth + 1);
    }
  }
}