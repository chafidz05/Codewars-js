function sumStrings(a, b) {
  return a >= 9007199254740992 - 1 || b >= 9007199254740992 - 1 ? bigInt(a, b) : (a * 1 + b * 1) + '';
}

function bigInt(a, b) {
  var c = '';
  var d = 0;

  var zero = new Array((Math.abs(a.length - b.length)) + 1).join('0');

  a.length >= b.length ? b = zero + b : a = zero + a;

  for(var i = b.length - 1; i >= 0; i--) {
    var sum = (a[i] * 1 + b[i] * 1) + d;
    if(sum >= 10) {
      sum = sum - 10;
      d = 1;
    } else {
      d = 0;
    }
    c = sum + c;
  }
  return d > 0 ? d + c : c;
}