function removeNegatives(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      for(var j = i; j < arr.length; j++) {
        arr[j] = arr[j+1];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
}
console.log(removeNegatives([-1,-2,-3,4,5,6,7]));
//output [4,5,6,7]

function removeNegatives2(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
      newArr.push(arr[i]);
    }
  }
  arr = newArr;
  return newArr;
}
console.log(removeNegatives2([-1,-2,-3,4,5,6,7,8]));
//output [4,5,6,7,8]