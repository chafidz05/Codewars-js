function getSum(a, b) {
  if(a == b) {
    return a;
  } else if(a > b) {
    return a + getSum(a - 1, b);
  } else {
    return a + getSum(a + 1, b);
  }
}