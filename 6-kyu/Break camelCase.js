function solution(string) {
  var newString = '';
  for(letter of string) {
    if(letter == letter.toUpperCase()) {
      newString += ' ';
      newString += letter;
    } else {
      newString += letter;
    }
  }
  return newString;
}