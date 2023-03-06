function validBraces(braces) {
  const regPairs = /\(\)|\[\]|\{\}/g
  while(regPairs.test(braces)) { braces = braces.replace(regPairs, '') }
  return !braces.length
}