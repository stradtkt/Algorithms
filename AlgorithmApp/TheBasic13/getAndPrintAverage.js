function getAndPrintAverage(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  return avg;
}
console.log(getAndPrintAverage([1,2,3,4,5,6,7,8,9]));