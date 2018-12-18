/**
 * Integer to Roman Numerals
 * Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation,
 * I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
 */

 function integerToRomanNumerals(num) {
     if(num >= 4000 || num < 0) {
         return "Please enter a number less then 4000 and greater than 0";
     }

     var arr = [
         ["M", 1000],
         ["CM", 900],
         ["D", 500],
         ["CD", 400],
         ["C", 100],
         ["XC", 90],
         ["L", 50],
         ["XL", 40],
         ["X", 10],
         ["IX", 9],
         ["V", 5],
         ["IV", 4],
         ["I", 1]
     ];
     var roman = "";
     for(var i = 0; i < arr.length; i++) {
         for(var j = 1; j <= Math.floor(num/arr[i][1]); j++) {
             roman += arr[i][0];
         }
         num %= arr[i][1];
     }
     return roman;
 }

 console.log(integerToRomanNumerals(1234));