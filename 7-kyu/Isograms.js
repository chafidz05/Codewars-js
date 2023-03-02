function isIsogram(str) {
  if(str.isEmpty) {
    return true;
  } else {
    str = str.toLowerCase();
  }
  var array = str.split('');
  var sortedArr = array.slice().sort();

  for(var i = 0; i < array.length; i++) {
    if(sortedArr[i + 1] == sortedArr[i]) {
      return false;
    }
  }
  return true;
}