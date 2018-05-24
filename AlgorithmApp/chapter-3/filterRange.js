function removeAt(arr, idx) {
  for(var i = idx; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length--;
  return arr;
}

function filterRange(arr,min,max) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < min || arr[i] > max) {
      removeAt(arr, i);
      i--;
    }
  }
  return arr;
}
console.log(filterRange([1,2,3,4,5,6,7],2,5));