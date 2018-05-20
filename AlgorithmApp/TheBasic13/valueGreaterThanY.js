function valueGreaterThanY(arr, Y) {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(i > Y) {
      count++;
    }
  }
  return count;
}
console.log(valueGreaterThanY([1,2,3,4,5,6,7,8], 4));