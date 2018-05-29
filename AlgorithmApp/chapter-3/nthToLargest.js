function nthToLargest(arr, nth) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length-i; j++) {
      if(arr[j] < arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr[nth-1];
}
console.log(nthToLargest([1,2,3,4,5,6,7,8,98], 3));