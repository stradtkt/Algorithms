function removeNegatives(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      for(var j = i; j < arr.length; j++) {
        arr[j] = arr[j+1];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
}
console.log(removeNegatives([-1,-2,-3,4,5,6,7]));