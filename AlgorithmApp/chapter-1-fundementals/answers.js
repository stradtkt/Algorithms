/**
 * Setting and Swapping
 * Set myNumber to 42 . Set myName to your name. Now swap myNumber into myName & vice versa.
 */

 function settingAndSwapping() {
   var myName = "Kevin";
   var myNumber = 42;
   var temp = myName;
    myName = myNumber;
    myNumber = temp;

    console.log("My name is now " + myName);
    console.log("My number is now " + myNumber);
 }
//  settingAndSwapping();

/**
 * Print -52 to 1066
 * Print integers from -52 to 1066 using a FOR loop.
 */

 function printNegative52to1066() {
   var start = -52, end = 1066;
   for(var i = start; i <= end; i++) {
     console.log(i);
   }
 }
//  printNegative52to1066();

/**
 * Don’t Worry, Be Happy
 * Create beCheerful() . Within it, console.log string "good morning!" Call it 98 times.
 */

 function beCheerful() {
    for(var i = 0; i <= 98; i++) {
      console.log("good morning!");
    }
 }
//  beCheerful();

/**
 * Multiples of Three – but Not All
 * Using FOR , print multiples of 3 from -300 to 0. Skip -3 and -6.
 */

 function multiplesOfThree() {
   var start = 3, end = -300;
   for(var i = start; i >= end; i--) {
     if(i == -3 || i == -6) {
       continue;
     }
     console.log(i);
   }
 }
// multiplesOfThree();

/**
 * Printing Integers with While
 * Print integers from 2000 to 5280, using a WHILE .
 */
function printWithWhile() {
  var start = 2000, end = 5280;
  while(start <= end) {
    start++;
    console.log(start);
  }
}
// printWithWhile();