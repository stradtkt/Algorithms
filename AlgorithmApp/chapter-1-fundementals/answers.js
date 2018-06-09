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
 settingAndSwapping();