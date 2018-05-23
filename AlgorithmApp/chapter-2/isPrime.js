function isPrime(num) {
  for(var i = num - 1; i > 1; i--) {
    if(num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(4));