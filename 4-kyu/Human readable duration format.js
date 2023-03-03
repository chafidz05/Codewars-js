function formatDuration(seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minutes: 60, second: 1 };
  var res = [];

  if(seconds === 0) return 'now';

  for(var key in time) {
    if(seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0];
}