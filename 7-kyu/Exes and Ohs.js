function XO(str) {
  const totalX = str.split('').filter(char => /x/gi.test(char)).length;
  const totalO = str.split('').filter(char => /o/gi.test(char)).length;

  return totalX === totalO;
}