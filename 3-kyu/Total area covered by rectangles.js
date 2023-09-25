function calculate(recs){
  if(recs.length === 0) return 0;
  recs.sort((a, b) => a[0] - b[0]);  //next rect starts at least where previous one starts (x - axis)
  var arr_pointers = [];
  for(var i = 0; i < recs.length; i++){
    arr_pointers.push(recs[i][1]); arr_pointers.push(recs[i][3]);
  }
  arr_pointers = [...new Set(arr_pointers)];
  arr_pointers.sort((a, b) => a - b);
  var sum = 0, sum_obj = {};
  for(var i = 0; i < arr_pointers.length - 1; i++){
    sum_obj[arr_pointers[i]] = {pos: 0, hei: arr_pointers[i + 1] - arr_pointers[i]};  //{current position, height}
  }
  for(var r = 0; r < recs.length; r++){
    for(var i = recs[r][1]; i < recs[r][3];){   //without loop-expression!!
      if(!(sum_obj[i]['pos'] > recs[r][2])){    //deal with nested 
        if(sum_obj[i]['pos'] > recs[r][0])
          sum = sum + (recs[r][2] - sum_obj[i]['pos']) * sum_obj[i]['hei'];
        else
          sum = sum + (recs[r][2] - recs[r][0]) * sum_obj[i]['hei'];
        sum_obj[i]['pos'] = recs[r][2];
      }
      i += sum_obj[i]['hei'];
    }
  }
  return sum;
}
