const memo = fn => (cache => n => n in cache ? cache[n] : cache[n] = fn(n))( [0n, 1n]);
const even = n => !(n&1);
const F = memo(n =>
  n % 3 === 0 ? (n => 5n * F(n)**3n + 3n * (even(n) ? 1n : -1n) * F(n))(n / 3) :
  n % 3 === 1 ? (n => F(n + 1)**3n + 3n * F(n + 1) * F(n)**2n - F(n)**3n)((n - 1) / 3) :
  (n => F(n + 1)**3n + 3n * F(n+1)**2n * F(n) + F(n)**3n)((n - 2) / 3)
);
const fib = n => n >= 0 ? F(n) : even(n) ? -F(-n) : F(-n);