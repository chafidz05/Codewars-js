var sumPairs = function(ints, s) {
  const intsSet = new Set();
  for(let i = 0; i < ints.length; i++) {
    let currInt = ints[i];
    if(intsSet.has(s - currInt)) {
      return [s - currInt, currInt];
    } else {
      intsSet.add(currInt);
    }
  }
}