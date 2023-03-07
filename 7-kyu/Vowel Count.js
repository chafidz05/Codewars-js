function getCount(str) {
  return str.split('').reduce((sum, value) => (/[aeiou]/gi.test(value) ? sum + 1 : sum), 0);
}