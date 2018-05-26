function secondToLargest(arr) {
  var max = arr[0], second = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  for(var i = 0; i < arr.length; i++) {
    if((arr[i] < max) && arr[i] != max) {
      second = arr[i];
      break;
    }
  }
  for(var i = 0; i < arr.length; i++) {
    if((arr[i] > second) && arr[i] != max) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondToLargest([1,23,3,4,5,6,6,55,4,34,3,232]));
//output 55