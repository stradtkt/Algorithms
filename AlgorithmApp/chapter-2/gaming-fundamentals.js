function rollOne() {
  return Math.floor(Math.random() * 6 + 1);
}
rollOne();

function playFives(num) {
  for(var i = 1; i <= num; i++) {
    var result = rollOne();
    console.log(result);
    if(result == 5) {
      console.log("That is good luck");
    }
  }
}
// playFives(50);

function playStatistics() {
  var max;
  var min;
  for(var i = 1; i <= 8; i++) {
    var result = rollOne();
    if(!max) {
      max = result;
    }
    if(!min) {
      min = result;
    }
    if(result > max) {
      max = result;
    }
    if(result < min) {
      min = result;
    }
  }
  console.log("Max is " + max);
  console.log("Min is " + min);
}
// playStatistics();

function playStatistics2() {
  var max;
  var min;
  var sum = 0;
  for(var i = 1; i <= 8; i++) {
    var result = rollOne();
    if(!max) {
      max = result;
    }
    if(!min) {
      min = result;
    }
    if(result > max) {
      max = result;
    }
    if(result < min) {
      min = result;
    }
    sum+= result;
  }
  console.log("Max is " + max);
  console.log("Min is " + min);
  console.log("Sum is " + sum);
}
// playStatistics2();

function playStatistics3(numTimes) {
  var max;
  var min;
  var sum = 0;
  for(var i = 1; i <= numTimes; i++) {
    var result = rollOne();
    console.log(result);
    sum+=result;
    if(result > max) {
      max = result;
    }
    if(result < min) {
      min = result;
    }
  }
  console.log("Max is " + max);
  console.log("Min is " + min);
  console.log("Sum is " + sum);
}
playStatistics3(10);