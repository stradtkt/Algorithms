function swapTowardCenter(arr) {
  //array left is set to 0 when the right side of the array is set to the last element
  var left = 0, right = arr.length - 1;
  // while left is less than right
  while(left < right) {
    //set the left side of the array to 
    var temp = arr[left];
    // the left side of the array is set to the right side
    arr[left] = arr[right];
    // the right side of the array is then set to the left side which is in the temp variable
    arr[right] = temp;
    //the left and right side then shift 2 places changing the order in the array
    left+=2;
    right-=2;
  }
  return arr;
}
console.log(swapTowardCenter([1,2,3,4,5,6,7]));
console.log(swapTowardCenter([true,42,'Ada',2,'pizza']));