/**
 * Concat 
 * Concat 2 arrays together
 */

 function concat(arr1, arr2) {
   for(var i = 0; i < arr2.length; i++) {
     arr1.push(arr2[i]);
   }
   return arr1;
 }
 console.log(concat([1,2,3,4,5], ["Hello", "there", "my", "name"]));

 /**
  * nth to last
  * Return the nth number in the arr 
  */
 function nthToLast(arr, num) {
   if(arr.length < 4) {
     return "You need a longer array";
   }
   return arr[arr.length-num];
 }
 console.log(nthToLast([1,2,3,4,5,6,7], 4));
 //output 4 
 console.log(nthToLast([1,2,3], 2));
 //output "You need a longer array"

 /**
  * nth to largest
  * return the nth to largest item from the array
  */
function nthToLargest(arr, nth) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length-i; j++) {
      if(arr[j] < arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr[nth-1];
}
console.log(nthToLargest([1,2,3,4,5,6,7], 3));
//output 5 
console.log(nthToLargest([22,32,443,222,3,344,3232,3434,33], 4));
//output 344
