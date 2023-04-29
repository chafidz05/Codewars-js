var beeramid = function(bonus, price) {
  let n = 0;
  let i = 0;
  while(true) {
    i += 1;
    if(bonus - i * i * price < 0) return i - 1;
    bonus -= i * i * price;
  }
}