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


 /**
  * Count Non-Spaces
  * Accept a string and return the number of non-space
  *  characters found in the string. For example, given 
  * "Honey pie, you are driving me crazy" , return 29 (not 35 ).
  */

  function nonSpaces(str) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
      if(str[i] !== " ") {
        count++;
      }
    }
    return count;
  }
  console.log(nonSpaces("Honey pie"));

/**
 * Remove Shorter Strings
 * Given a string array and value (length), 
 * remove any strings shorter than length from the array.
 */

 function removeShorterStrings(arr, len) {
   for(var i = 0; i < arr.length; i++) {
     if(arr[i].length < len) {
       for(var j = i; j < arr.length; j++) {
         arr[j] = arr[j+1];
       }
       arr.length--;
       i--;
     }
   }
   return arr;
 }
 console.log(removeShorterStrings(["Hello", "There", "my", "name", "is", "kevin"],3));
 //output ["Hello", "There", "name", "kevin"]

 /**
  * String: Reverse
  * Implement reverseString(str) that, given string, returns that string with 
  * characters reversed. Given "creature" , return "erutaerc" . 
  * Tempting as it seems, do not use the built-in reverse() !
  */

  function reverseString(str) {
    var arr = [], left = 0, right = str.length-1;
    while(left < right) {
      arr[left] = str[right];
      arr[right] = str[left];
      left++;
      right--;
    }
    str = arr.join("");
    return str;
  }
  console.log(reverseString("Hello world this is Kevin"));