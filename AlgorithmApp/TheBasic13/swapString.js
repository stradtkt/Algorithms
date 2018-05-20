function swapString(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}

console.log(swapString([-1,1,-2,2,3,-3,4,-4,5]));