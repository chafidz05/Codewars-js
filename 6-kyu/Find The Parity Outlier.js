function findOutlier(integers) {
  let oddArr = [];
  let evenArr = [];

  for(let i = 0; i < integers.length; i++) {
    if(integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
    } else {
      oddArr.push(integers[i]);
    }
  }

  if(evenArr.length == 1) {
    return evenArr[0];
  } else {
    return oddArr[0];
  }
}