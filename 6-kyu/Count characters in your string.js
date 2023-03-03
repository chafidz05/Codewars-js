function count(string) {
  const count = {};

  string.split('').forEach(char => {
    count[char] = count[char] ? (count[char] + 1) : 1;
  });
  return count;
}