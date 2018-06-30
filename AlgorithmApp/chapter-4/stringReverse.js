/**
 * String: Reverse
 * Implement reverseString(str) that, given string, returns that string with 
 * characters reversed. Given "creature" , return "erutaerc" . 
 * empting as it seems, do not use the built-in reverse() !
 */

 function reverseString(str) {
     var newStr = "";
     for(var i = str.length-1; i >= 0; i--) {
         newStr += str[i];
     }
     str = newStr;
     return str;
 }
 console.log(reverseString("Hello there this is a reversed string"));