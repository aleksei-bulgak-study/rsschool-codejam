module.exports = function recursion(tree) {
  const array = [];
  function internal(node, depth) {
    if (node && node.value) {
      if (array[depth]) {
        array[depth].push(node.value);
      } else {
        array[depth] = [node.value];
      }
      internal(node.left, depth + 1);
      internal(node.right, depth + 1);
    }
  }

  if (!tree) {
    throw new Error('Invalid input argument');
  }

  internal(tree, 0);
  return array;
};
