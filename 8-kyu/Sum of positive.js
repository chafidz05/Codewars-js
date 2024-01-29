function positiveSum(arr) {
  return arr.reduce((a, c) => {
    if (c > 0) {
      return a + c;
    }
    return a + 0;
  }, 0);
}