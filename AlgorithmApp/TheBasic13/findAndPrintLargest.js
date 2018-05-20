function findAndPrintLargest(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == arr[arr.length-1]) {
      console.log(arr[i]);
    }
  }
}
findAndPrintLargest([1,2,3,4,5,6]);