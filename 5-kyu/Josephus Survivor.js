function josephusSurvivor(n, k) {
  let dp = k > n ? (k % n) - 1 : k - 1;
  if(dp == -1) {
    dp = n - 1;
  }
  let array = new Array(n);
  for(let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }
  while(array.length > 1) {
    array.splice(dp, 1);
    dp += k - 1;
    while(dp >= array.length) {
      dp -= array.length;
    }
  }
  return array[0];
}