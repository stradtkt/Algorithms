function removeDuplicates(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i+1] == arr[i]) {
      for(var j = i; j < arr.length; j++) {
        arr[j] = arr[j+1];
      }
      arr.length--;
    }
  }
  return arr;
}
console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5,6,6]));
//output [1,2,3,4,5,6]