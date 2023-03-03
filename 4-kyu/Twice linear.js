function dblLinear(n) {
  var u = [1];
  var pt2 = 0;
  var pt3 = 0;
  for(var i = 1; i <= n; i++) {
    u[i] = Math.min(2 * u[pt2] + 1, 3 * u[pt3] + 1);
    if(u[i] == 2 * u[pt2] + 1) pt2++;
    if(u[i] == 3 * u[pt3] + 1) pt3++;
  }
  return u[n];
}