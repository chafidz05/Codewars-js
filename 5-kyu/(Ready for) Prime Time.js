function prime(num) {
  let primes = [];
  let i = 1;
  while(i <= num) {
    if(isPrime(i)) primes.push(i);
    i++;
  }
  return primes;
}

function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false;
  }
  return n !== 1;
}