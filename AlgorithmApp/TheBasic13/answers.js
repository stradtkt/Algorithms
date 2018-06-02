/**
 * Print 1-255
 * print1To255()
 * Print all the integers from 1 to 255.
 */

 function print1To255() {
   var start = 1, end = 255;
   for(var i = start; i <= end; i++) {
     console.log(i);
   }
 }
//  print1To255();


/**
 * Print Ints and Sum 0-255
 * printIntsAndSum0To255()
 * Print integers from 0 to 255, and with each integer print the sum so far.
 */

 function printIntsAndSum0To255() {
   var start = 0, end = 255, sum = 0;
   for(var i = start; i <= end; i++) {
     sum += i;
     console.log(i);
   }
   return sum;
 }
//  console.log(printIntsAndSum0To255());

/**
 * Print Max of Array
 * printMaxOfArray(arr)
 * Given an array, find and print its largest element.
 */

 function maxOfArray(arr) {
  return Math.max(...arr);
 }
//  console.log(maxOfArray([1,2,3,4,5]));
 //output 5

 /**
  * Return Odds Array 1-255
  * returnOddsArray1To255()
  * Create an array with all the odd integers between 1 and 255 (inclusive).
  */

  function returnsOddsArray1To255() {
    var start = 1, end = 255;
    for(var i = start; i < end; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  // console.log(returnsOddsArray1To255());

  /**
   * Return Array Count Greater than Y
   * returnArrayCountGreaterThanY(arr, y)
   * Given an array and a value Y, count and print the number of array values greater than Y.
   */

   function valuesGreaterThanY(arr, Y) {
     for(var i = 0; i < arr.length; i++) {
       if(arr[i] > Y) {
         console.log(arr[i]);
       }
     }
     return arr;
   }
// valuesGreaterThanY([1,22,33,44,55,66,77,88],44);

/**
 * Print Max, Min, Average Array Values
 * printMaxMinAverageArrayVals(arr)
 * Given an array, print the max, min and average values for that array.
 */

 function printMinMaxAverage(arr) {
   var min = 0, max = 0, sum = 0, avg = 0;
   min = Math.min(...arr);
   max = Math.max(...arr);
   for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
   }
   avg = sum / arr.length;
   return [min, max, avg];
 }
//  console.log(printMinMaxAverage([1,2,3,4,5,6,7,8]));
 //output [1,8,4.5]

 