function humanReadable (seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;
  
  var pad = function(val) {
    return val < 10 ? "0" + val : val;
  };
  
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}