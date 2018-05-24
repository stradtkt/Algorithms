function scaleTheArray(arr, num) {
  // start at 0 then make i less than or equal to arr.length then increment i
  for(var i = 0; i < arr.length; i++) {
    //the incremented array i is then equal to the arr[i] times the num that you put in
    arr[i]*=num;
  }
  //return array
  return arr;
}
console.log(scaleTheArray([1,2,3,4,5,6],10));
// output [10,20,30,40,50,60]