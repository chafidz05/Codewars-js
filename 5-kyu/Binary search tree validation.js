class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isBST = node => {
  const arr1 = [];
  t(node, arr1);
  return JSON.stringify(arr1) === JSON.stringify(arr1.slice().sort((a, b) => a - b)) ||
  JSON.stringify(arr1) === JSON.stringify(arr1.slice().sort((a, b) => b - a));
}

function t(root, arr) {
  if(!root) return;
  t(root.left, arr);
  arr.push(root.value);
  t(root.right, arr);
}