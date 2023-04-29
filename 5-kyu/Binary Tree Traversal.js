function preOrder(node) {
  const arr = [];
  t(node, arr);
  return arr;
  function t(node, arr) {
    if(!node) return;
    arr.push(node.data);
    t(node.left, arr);
    t(node.right, arr);
  }
}

function inOrder(node) {
  const arr = [];
  t(node, arr);
  return arr;
  function t(node, arr) {
    if(!node) return;
    t(node.left, arr);
    arr.push(node.data);
    t(node.right, arr);
  }
}

function postOrder(node) {
  const arr = [];
  t(node, arr);
  return arr;
  function t(node, arr) {
    if(!node) return;
    t(node.left, arr);
    t(node.right, arr);
    arr.push(node.data);
  }
}