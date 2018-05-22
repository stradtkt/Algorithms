function fibonacci(num) {
  var sum = 1, i = 0, j = 1;
  while(num > 1) {
    sum = i + j;
    i = j;
    j = sum;
    num--;
  }
  return sum;
}
console.log(fibonacci(6));
//output 8