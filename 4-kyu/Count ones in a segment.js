const pattern = (num, cipher) => (1 << cipher) * (num >> (cipher + 1));
const restOfBinary = (num, cipher) => Math.max(0, (num % ((1 << cipher) << 1)) - (1 << cipher) + 1);
const column = (num, cipher) => pattern(num, cipher) + restOfBinary(num, cipher);
const addUpTo = num => {
  let bit = 0,
      total = 0;
  while(num >> bit > 0) total += column(num, bit++);
  return total;
};
const countOnes = (left, right) => addUpTo(right) - addUpTo(left - 1);