// function reverseArray(arr) {
//  return arr.reverse();
// }
function reverseArray(arr) {
  //create a new array
  var newArr = [];
  // i is starting at the last element in the array // make it greater than or equal to zero then decrement it
  for(var i = arr.length-1; i >=0; i--) {
    //push the values to the new array
    newArr.push(arr[i]);
  }
  //return the array so you can see it in the console
  return newArr;
}
console.log(reverseArray([1,2,3,4,5,6]));
//output [6,5,4,3,2,1]