function boolfuck(code, input = "") {
  var tape = [0];
  var pointer = 0;
  var bitInput = input.split("").map(c => c.charCodeAt().toString(2)).map(b => "0".repeat(8 - b.length) + b).map(b => b.split("").reverse().join(""));
  bitInput = bitInput.join();
  var bitIndex = 0;
  var bitOutput = "";
  for(var i = 0; i < code.length; i++) {
    switch(code[i]) {
      case "+":
        tape[pointer] = +!tape[pointer];
        break;
      case ",":
        bitOutput += tape[pointer];
        break;
      case "<":
        pointer--;
        if(pointer < 0) {
          tape = [0].concat(tape);
          pointer++;
        }
        break;
      case ">":
        pointer++;
        if(pointer >= tape.length) tape.push(0);
        break;
      case "[":
        if(tape[pointer] === 0) {
          var unmatched = 1;
          while(unmatched > 0) {
            i++;
            if(code[i] === "[") unmatched++;
            if(code[i] === "]") unmatched--;
          }
        }
        break;
      case "]":
        if(tape[pointer] === 1) {
          var unmatched = 1;
          while(unmatched > 0) {
            i--;
            if(code[i] === "[") unmatched--;
            if(code[i] === "]") unmatched++;
          }
        }
        break;
    }
  }
  var bytes = [];
  for(var i = 0; i < bitOutput.length; i++) bytes[~~(i / 8)] = bytes[~~(i / 8)] ? bytes[~~(i / 8)] + bitOutput[i] : bitOutput[i];
  bytes[bytes.length - 1] += "0".repeat(8 - bytes[bytes.length - 1].length);
  bytes = bytes.map(b => b.split("").reverse().join(""));
  var characters = bytes.map(b => String.fromCharCode(parseInt(b, 2)));
  var output = characters.join("");
  return output;
}