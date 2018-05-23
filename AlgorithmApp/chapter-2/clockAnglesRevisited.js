function clockAnglesRevisited(seconds) {
  var time = [
    ["week", 604800, 1],
    ["day", 86400, 1],
    ["half-day", 43200, 0.5],
    ["hour", 3600, 12],
    ["minute", 60, 60],
    ["second", 1, 60]
  ];

  var angles = {};
  for(var i = 0; i < time.length; i++) {
    angle[time[i][0]] = 360 * (seconds/time[i][1])/time[i][2];
    seconds %= time[i][1];
  }

  for(key in angles) {
    if(key != "day" && key != "half-day") {
      console.log(key + " hand: " + Math.floor(angles[key]) + " degs.");
    }
  }
}