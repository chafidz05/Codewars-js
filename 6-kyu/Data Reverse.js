const dataReverse = function(data) {
  if(data.length === 0) return [];
  const arrayBytes = [];
  const tam = data.length / 8;
  for(var i = 0; i < tam; i++) {
    arrayBytes.push(data.splice(0, 8));
  }
  return arrayBytes.reverse().join().split(",").map(v => v * 1);
};