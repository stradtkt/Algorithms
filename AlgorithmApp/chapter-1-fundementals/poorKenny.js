
function whatHappensToday() {
  var random = Math.random();
  if(random < 0.1) {
    return "Volcano";
  } else if(random < 0.25) {
    return "tsunami";
  } else if(random < 0.45) {
    return "earthquake";
  } else if(random < 0.70) {
    return "blizzard";
  } else {
    return "meteor";
  }
}
