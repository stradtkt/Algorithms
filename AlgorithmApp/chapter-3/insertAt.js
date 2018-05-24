function insertAt(arr, idx, val) {
  // i is starting at the last element in the array and i is greater or equal to the index value that is passed in
  for(var i = arr.length - 1; i >= idx; i--) {
    // adds 1 to the incremented arr i that is being looped through and sets it to the arr[i] item that is being looped through
    arr[i+1] = arr[i];
  }
  //the index item that is passed in is set to the array which the val that is passed in is equal to that array index value so it changes the array
  arr[idx] = val;
  return arr;
}
console.log(insertAt([1,2,3,4,5,6],1,22));