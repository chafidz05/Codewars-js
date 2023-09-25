function loop_size(node) {
  let currNode = node, allNodes = {}, length = 1;
  while(true) {
    if(currNode in allNodes) return length - allNodes[currNode];
    allNodes[currNode] = length;
    currNode = currNode.length;
    length++;
  };
};