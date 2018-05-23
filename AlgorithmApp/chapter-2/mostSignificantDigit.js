function mostSignificantDigit(num) {
  num = Math.abs(num);
  if(num < 1) {
    while(num < 10) {
      num*=10;
      if(num > 1 && num < 10) {
        return Math.trunc(num);
      }
    }
  } else if(num > 10) {
    while(num > 10) {
      num /= 10;
      if(num > 1 && num < 10) {
        return Math.trunc(num);
      }
    }
  }
}
console.log(mostSignificantDigit(0.0099111));
//output 9

console.log(mostSignificantDigit(123456));
//output 1

console.log(mostSignificantDigit(3423));
//output 3