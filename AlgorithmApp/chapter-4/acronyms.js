/**
 * Acronyms
 * Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
 * Given " there's no free lunch - gotta pay yer way. " , return "TNFL-GPYW" . 
 * Given "Live from New York, it's Saturday Night!" , return "LFNYISN" .
 */


 function acronyms(str) {
     var str2 = "";
     for(var i = 0; i < str.length-1; i++) {
         if(str[i+1] !== " " && str[i] == " ") {
             str2 += str[i+1].toUpperCase();
         }
     }
     str = str2;
     return str;
 }

 console.log(acronyms(" Young Money Cash Money Ballers"));