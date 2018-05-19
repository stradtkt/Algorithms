// function reverseArray(arr) {
//  return arr.reverse();
// }
function reverseArray(arr) {
  var newArr = [];
  for(var i = arr.length-1; i >=0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1,2,3,4,5,6]));