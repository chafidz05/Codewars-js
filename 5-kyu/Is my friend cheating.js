function removeNb(n) {
  const sum = (n * (n + 1)) / 2;
  const result = [];
  for(let b = n; b > 0; b--) {
    const a = (sum - b) / (b + 1);

    if(a < n && Number.isInteger(a)) {
      result.push([a, b]);
    }
  }
  return result;
}