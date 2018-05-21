function threesAndFives() {
  var sum = 0;
  for(var i = 100; i < 400000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    } else if(i % 15 === 0) {
      continue;
    }
  }
  return sum;
}
console.log(threesAndFives());

function betterThreesAndFives(start, end) {
  var sum = 0;
  for(var i = start; i < end; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    } else if(i % 15 === 0) {
      continue;
    }
  }
  return sum;
}
console.log(betterThreesAndFives(10,40));