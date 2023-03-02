var RomanNumerals = {
  toRoman: function(number) {
    var romans = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ],
    output = "";
    for(var i = 0; i < romans.length; i++) {
      var glyph = romans[i][1];
      var limit = Number(romans[i][0]);
      while(number >= limit) {
        output += glyph;
        number -= limit;
      }
    }
    return output;
  },

  fromRoman: function(roman) {
    var map = {
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    },
      value = 0;
    for(var i = 0; i < roman.length; i++) {
      var two = map[roman[i] + roman[i + 1]];
      var one = map[roman[i]];
      if(two != null) {
        value += two; i++;
      } else if(one != null) {
        value += one;
      }
    }
    return value;
  }
}