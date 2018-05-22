function messyMath(num) {
  var sum = 0;
  for(var i = 0; i <= num; i++) {
      if(i == num / 3) {
        return -1;
      } else if(i % 3 === 0) {
        continue;
      } else if(i % 7 === 0) {
        sum += i * 2;
      } else {
        sum += i;
      }
    }
    return sum;
  }
  console.log(messyMath(14))