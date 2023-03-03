function getPINs(observed) {
  const _ = undefined
  const pad = [
   ['1','2','3'],
   ['4','5','6'],
   ['7','8','9'],
   [ _ ,'0', _ ]
  ]
  const keys = observed.split('').map(o => getSiblingKeys(o.toString(), pad))
  const results = cartesian(keys).map(arr => arr.join(''))
  
  return results
  
  function getSiblingKeys(n, pad) {
    const e = []
    const y = pad.findIndex(arr => arr.indexOf(n) != -1)
    const x = pad[y].indexOf(n)

    e.push(n)
    if (y > 0) e.push(pad[y-1][x])
    if (y < 2 || n == '8') e.push(pad[y+1][x])
    if (x > 0 && n != '0') e.push(pad[y][x-1])
    if (x < 2 && n != '0') e.push(pad[y][x+1])
    
    return e
  }

  function cartesian(arr) {
    return arr.reduce((a,b) => (
      a.map((x) =>
        b.map((y) =>
          x.concat(y)
        )
      ).reduce((a,b) => (
        a.concat(b)
      ), [])
    ), [[]])
  }
}