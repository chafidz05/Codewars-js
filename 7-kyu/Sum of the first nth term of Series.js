function SeriesSum(n) {
  if(n === 0) return '0.00';
  let result = 1;
  for(let i = 4; i <= n * 3; i = i + 3) {
    result += 1 / i;
  }
  return result.toFixed(2);
}