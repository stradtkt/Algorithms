function factorial(num) {
  var mult = num;
  for(var i = num-1; i > 0; i--) {
    mult *= i;
  }
  return mult;
}
console.log(factorial(5));