function onlyKeepLastFew(arr, x) {
  for(var i = 0; i <= arr.length-x; i++) {
    for(var j = 0; j < arr.length; j++) {
      arr[j] = arr[j+1];
    }
    arr.length--;
  }
  return arr;
}
console.log(onlyKeepLastFew([2,4,6,8,10],3));