function swapPairs(arr) {
  var limit;
  if(arr.length % 2 !== 0) {
    limit = arr.length - 1;
  } else {
    limit = arr.length;
  }
  for(var i = 0; i < limit; i+=2) {
    var temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }
  return arr;
}
console.log(swapPairs(['Kevin',1,'Patrick',2]));