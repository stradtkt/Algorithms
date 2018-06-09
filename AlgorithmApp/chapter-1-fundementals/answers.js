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

