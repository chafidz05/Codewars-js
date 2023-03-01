const solution = (f, s) => {
  return f.map((v, i) => Math.pow(Math.abs(s[i] - v), 2)).reduce((a, b) => a + b, 0)/f.length;
}