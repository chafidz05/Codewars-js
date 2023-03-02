var recoverSecret = function(triplets) {
  let duplets = [];
  let res = '';

  triplets.forEach(trip => {
    let str = trip.join('');
    let d1 = str.substr(0, 2);
    let d2 = str.substr(1, 3);
    if(duplets.indexOf(d1) === -1) {
      duplets.push(d1);
    }
    if(duplets.indexOf(d2) === -1) {
      duplets.push(d2);
    }
  });
  let nxt = findNext(duplets);
  while(nxt) {
    res += nxt;
    duplets = duplets.filter(d => d.indexOf(nxt) === -1);
    nxt = findNext(duplets);
  }
  return res;
}

function findNext(duplets) {
  let nxt = duplets.find(d => duplets.every(_d => d[0] !== _d[1]));
  return duplets.length > 1 ? nxt[0] : duplets[0];
}