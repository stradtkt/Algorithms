function extractDigit(num, digitNum) {
  return (Math.floor(Math.abs(num)/Math.pow(10, digitNum)) % 10);
}

console.log(extractDigit(1923, 5));
//output 0

console.log(extractDigit(1923, 3));
//output 1

console.log(extractDigit(1923, 2));
//output 9