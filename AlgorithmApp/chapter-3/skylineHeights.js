function skylineHeights(arr) {
  var max = arr[0];
  var newArr = [];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > 0) {
      if(arr[i] > max) {
        newArr.push(arr[i]);
        max = arr[i];
      }
    }
  }
  return newArr;
}

console.log(skylineHeights([-1,2,3,4,5,6]));
//output [2,3,4,5,6]