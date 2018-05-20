function saveArrayValues(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == arr[0]) {
      arr.shift();
    }
  }
  arr.push(0);
  return arr;
}

console.log(saveArrayValues([1,2,3,4]));