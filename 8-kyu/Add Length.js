function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}