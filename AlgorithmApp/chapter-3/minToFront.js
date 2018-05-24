function removeAt(arr, idx) {
  for(var i = idx; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length--;
  return arr;
}
function insertAt(arr, idx, val) {
  for(var i = arr.length - 1; i >= idx; i--) {
    arr[i+1] = arr[i];
  }
  arr[idx] = val;
  return arr;
}
function minToFront(arr) {
  var min = arr[0];
  var num;
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
      num = i;
    }
  }
  arr = removeAt(arr, num);
  return insertAt(arr, 0, min);
}
console.log(minToFront([4,3,1,2,5]));