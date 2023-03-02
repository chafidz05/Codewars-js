function digPow(n, p) {
  let string = n.toString();
  let len = string.length;
  let result = 0;
  for(var i = 0; i < len; i++) {
    var numberser = parseInt(string.charAt(i), 10);
    result += Math.pow(numberser, p + i);
  }
  var x = Math.pow(n, p);
  if(result === x) {
    return p;
  } else if(result % n === 0) {
    return result / n;
  } else {
    return -1;
  }
}