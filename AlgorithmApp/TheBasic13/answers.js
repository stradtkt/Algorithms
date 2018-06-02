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