var sum = function(number) {
  return package(number, number);
}

var memo = [];
var p = function(n, m) {
  if(m == 0) {
    return 0
  };
  if(n == 0) {
    return 1
  };
  if(n < 0) {
    return 0
  };
  if(memo[n] == undefined) memo[n] = [];
  var result = memo[n][m];
  if(typeof result != 'number') {
    result = p(n - m, m) + p(n, m - 1);
    memo[n][m] = result;
  }
  return result;
}