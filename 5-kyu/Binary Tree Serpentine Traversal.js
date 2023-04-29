function serpentineTree(node) {
  const left = {};
  dfs(node, left);
  return Object.values(left).reduce((arr, val, i) => arr.concat(i % 2 ? val.reverse() : val), []);
}

function dfs(node, obj, d = 0) {
  if(!node) return;
  if(!obj[d]) obj[d] = [];
  obj[d].push(node.data);
  dfs(node.left, obj, d + 1);
  dfs(node.right, obj, d + 1);
}