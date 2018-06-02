/**
 * Create a function that, given a string, returns all of that string’s contents, 
 * but without blanks. If given the string " 
 * Pl ayTha tF u nkyM usi c " , return "PlayThatFunkyMusic" .
 */
function removeBlanks(str) {
  var arr = str.split("");
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] !== " ") {
      newArr.push(arr[i]);
    }
  }
  str = newArr.join("");
  return str;
}

console.log(removeBlanks(" Ke   v  in  W  as   H e r e"));

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
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        numStr += str[i];
    }
  }  
  numStr = Number(numStr);
  return numStr; 
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

/**
 * Acronyms
 * Create a function that, given a string, returns the string’s acronym (first letters only, capitalized).
 * Given " there's no free lunch - gotta pay yer way. " , return "TNFL-GPYW" . 
 * Given "Live from New York, it's Saturday Night!" , return "LFNYISN" .
 */

 function acronyms(str) {
   var str2 = "";
   for(var i = 0; i < str.length-1; i++) {
     if(str[i+1] !== " " && str[i] === " ") {
       str2 += str[i+1].toUpperCase();
     }
   }
   str = str2;
   return str;
 }
 console.log(acronyms("there's no free lunch - gotta pay yer way. "));
 console.log(acronyms(" Young Money Cash Money Ballers"));
 console.log(acronyms(" Live from New York, it's Saturday Night!"));


 