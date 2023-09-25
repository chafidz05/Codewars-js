const fact = n => (n < 2) ? 1 : fact(n - 1) * n;

const countCombinations = (seq) => {
  const duplications = Object.values(
    seq.reduce((acc, e) => ({...acc, [e]: (acc[e] || 0) + 1}), {})
  ).reduce((acc, el) => acc * fact(el), 1);

  return fact(seq.length) / duplications;
}

function listPosition(s) {
  const arr = s.split('');
  let order = 1;

  for(let i = 0; i < arr.length; i++) {
    const set = new Set();
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[i] && !set.has(arr[j])) {
        set.add(arr[j]);
        order += countCombinations([...arr.slice(i, j), ...arr.slice(j + 1)]);
      }
    }
  }
  return order;
}