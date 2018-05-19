function swapTowardCenter(arr) {
  var left = 0, right = arr.length - 1;
  while(left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left+=2;
    right-=2;
  }
  return arr;
}
console.log(swapTowardCenter([1,2,3,4,5,6,7]));
console.log(swapTowardCenter([true,42,'Ada',2,'pizza']));