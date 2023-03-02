function persistence(num) {
  let i = 0;
  while(num.toString().length !== 1) {
    num = num.toString().split("").reduce((a, b) => a * b);
    i++;
  }
  return i;
}