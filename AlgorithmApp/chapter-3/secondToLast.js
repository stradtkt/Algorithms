function secondToLast(arr) {
  if(arr.length < 2) {
    return null;
  }
  return arr[arr.length-2];
}
console.log(secondToLast([1,2,3,4]));
//output 3