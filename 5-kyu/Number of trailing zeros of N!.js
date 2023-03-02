function zeros(n) {
  var ans = 0;
  for(var i = 0; Math.pow(5, i) <= n; i++) {
    ans = ans + Math.floor(n / Math.pow(5, i));
  };
  return ans;
}