function nthToLast(arr, num) {
  if(arr.length < 4) {
    return null;
  }
  return arr[arr.length-num];
}
console.log(nthToLast([1,2,3,4,5,6,7],4));
//output 4