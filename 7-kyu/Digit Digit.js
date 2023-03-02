function squareDigits(num) {
  let x = num.toString().split('').map(Number);
  x.forEach((element, i) => x[i] = element * element);
  return Number(x.join(''));
}