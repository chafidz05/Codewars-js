function gap(g, m, n) {
  var lastPrime = 0;
  var isPrime = function(x) {
    for(var i = 2; i * i <= x; i++) {
      if(x % i == 0) {
        return false;
      }
    }
    return true;
  }
  for(var i = m; i <= n; i++) {
    if(isPrime(i)) {
      if(i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }
  }
  return null;
}