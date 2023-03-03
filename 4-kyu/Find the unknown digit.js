function solveExpression(exp) {
  exp = exp.replace('=', '==').replace('--', '+');
  for(var i = 0; i < 10; i++) {
    if(eval(exp.replace(/\?/g, i)) && !exp.includes(i)) {
      if(!/^00+$/.test(exp.replace(/\?/g, i).split('==')[1])) return i;
    }
  }
  return -1;
}