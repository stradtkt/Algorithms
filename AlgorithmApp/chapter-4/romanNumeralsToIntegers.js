/**
 * Roman Numerals to Integer
 * Sept 16, 2014 headline: “ Ancient Computer Found in Roman Shipwreck ”. Comprising 30 bronze gears, its wooden frame features 2000 characters. 
 * Given a string containing a Roman numeral representation of a positive integer, return the integer. Remember that III is
 */

 function romanNumeralToInteger(str) {
     var obj = {
         "I": 1,
         "V": 5,
         "X": 10,
         "L": 50,
         "C": 100,
         "D": 500,
         "M": 1000
     };
     var num = 0;
     for(var i = 0; i < str.length; i++) {
         if(obj.hasOwnProperty(str[i])) {
             if(obj[str[i+1]] > obj[str[i]]) {
                num -= obj[str[i]];
             } else {
                num += obj[str[i]];
            }
         } else {
            return "Ivalid roman numeral";
        } 
     } 
     return num;
 }

console.log(romanNumeralToInteger("MMM"));