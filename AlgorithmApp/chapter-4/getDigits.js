/**
 * String: Get Digits
 * Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
 * Given "0s1a3y5w7h9a2t4?6!8?0" , the function should return the number 1357924680 .
 */

 function getDigits(str) {
   var numStr = "";
   for(var i = 0; i < str.length; i++) {
     switch(str[i]) {
       case "0":
       case "1":
       case '2':
       case '3':
       case '4':
       case '5':
       case '6':
       case '7':
       case '8':
       case '9':
        numStr += str[i];
     }
   }
   numStr = Number(numStr);
   return numStr;
 }
 console.log(getDigits('dfkjn5334j3kj34kj34k3h4k3hk43h'));