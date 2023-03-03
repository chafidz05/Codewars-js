const isInteresting = (n, awes) => {
  if(n < 98) return 0;
  if(n < 100) return 1;

  const nums = [n, n + 1, n + 2];

  for(let i = 0; i < nums.length; i += 1) {
    const flipped = [];
    let copy = nums[i];
    let isSame = true;
    let isDecr = true;
    let isIncr = true;

    for(copy; copy > 0; copy /= 10) {
      const curr = copy % 10;

      if(flipped.length) {
        const prev = flipped[flipped.length - 1];

        if(prev !== curr) isSame = false;
        if(prev + 1 !== curr) isDecr = false;
        if(!(prev - 1 === curr || prev + 9 === curr)) isIncr = false;
      }
      flipped.push(curr);

      if(copy - curr === 0) {
        const isAwes = awes.some(phrase => phrase === nums[i]);
        const isSingl = Number(`${flipped.join('')}`) < 10;
        const isPalin = Number(`${flipped.join('')}`) === nums[i];
        const almostOrYes = i > 0 ? 1 : 2;

        if(isSingl || isSame || isDecr || isIncr || isPalin || isAwes) return almostOrYes;
      }
      copy -= curr;
    }
  }
  return 0;
}