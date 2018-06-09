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

/**
 * You Say It’s Your Birthday
 * If 2 given numbers represent your birth month and day in either order , 
 * log "How did you know?" , else log "Just another day...."
 */

 function sayItsYourBirthday(num1, num2) {
   if((num1 === 8 && num2 === 25) || (num1 === 25 && num2 === 8)) {
     console.log("It is your birthday");
   } else {
     console.log("Just another day");
   }
 }

// sayItsYourBirthday(8, 25);
// sayItsYourBirthday(4, 25);

/**
 * Leap Year
 * Write a function that determines whether a given year is a leap year. 
 * If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is .
 */

 function leapYear(year) {
   return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
 }
//  console.log(leapYear(2004));
//  console.log(leapYear(1998));

