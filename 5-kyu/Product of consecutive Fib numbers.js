function productFib(prod) {
  var n = 0;
  var nPlus = 1;
  while(n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n * nPlus === prod];
}