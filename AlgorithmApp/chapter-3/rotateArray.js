function rotateArray(arr, shiftBy) {
  var temp;
  for(var i = 1; i <= shiftBy; i++) {
    temp = arr[arr.length-1];
    for(var j = arr.length-1; j > 0; j--) {
      arr[j] = arr[j-1];
    }
    arr[0] = temp;
  }
  return arr;
}

console.log(rotateArray([1,2,3,4,5,6],1));
//output [6,1,2,3,4,5]