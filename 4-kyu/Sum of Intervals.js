function sumIntervals(intervals) {
  intervals = intervals.sort(function(a, b) {
    return a[0] - b[0];
  });
  intervals = intervals.reduce(function(acc, el, index, array) {
    const anterior = array[index - 1];
    if(array.length > 1 && anterior !== undefined) {
      if(el[0] < acc[acc.length - 1]) {
        if(el[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = el[1];
        }
      } else {
        acc.push(...el);
      }
    } else {
      acc.push(...el);
    }
    return acc;
  }, []);
  let result = 0;
  for(let i = 0; i < intervals.length - 1; i += 2) {
    result += (intervals[i + 1] - intervals[i]);
  }
  return result;
}