function insertAt(arr, idx, val) {
  for(var i = arr.length - 1; i >= idx; i--) {
    arr[i+1] = arr[i];
  }
  arr[idx] = val;
  return arr;
}
console.log(insertAt([1,2,3,4,5,6],1,22));