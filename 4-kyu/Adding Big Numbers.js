add = (x, y) => {
  const l = Math.max(x.length, y.length);
  const r = Array(l).fill().reduce(
    (a, _, i) => [
      (a[1] + +(x[x.length - 1 - i] || '0') + +(y[y.length - 1 - i] || '0')) % 10 + a[0],
      +((a[1] + +(x[x.length - 1 - i] || '0') + +(y[y.length - 1 - i] || '0')) > 9)
    ],
    ['', 0]
  );
  return '' + (r[1] ? r[1] : '') + r[0];
}