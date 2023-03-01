var findMissing = function (l) {  
  return (
    ((l[0] + l[l.length - 1]) * (l.length + 1)) / 2 - l.reduce((a, b) => a + b)
  );
};