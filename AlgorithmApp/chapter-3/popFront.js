function popFront(arr) {
  for(var i = 0; i < arr.length-1; i++) {
    arr[i] = arr[i+1];
  }
  arr.length--;
  return arr;
}
console.log(popFront([1,2,3,4,5,6]));