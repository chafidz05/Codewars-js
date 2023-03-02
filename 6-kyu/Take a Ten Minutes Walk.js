function isValidWalk(walk) {
  var dy = 0;
  var dx = 0;
  var dt = walk.length;
  for(var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        dy--;
        break;
      case 's':
        dy++;
        break;
      case 'w':
        dx--;
        break;
      case 'e':
        dx++;
        break;
    }
  }
  return dt === 10 && dx === 0 && dy === 0
}