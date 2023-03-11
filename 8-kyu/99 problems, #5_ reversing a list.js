const rev = xs => {
  const arr = [];
  xs.map(v => arr.unshift(v));
  return arr;
}