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

// console.log(removeBlanks(" Ke   v  in  W  as   H e r e"));

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
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

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
//  console.log(acronyms("there's no free lunch - gotta pay yer way. "));
//  console.log(acronyms(" Young Money Cash Money Ballers"));
//  console.log(acronyms(" Live from New York, it's Saturday Night!"));


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
  // console.log(nonSpaces("Honey pie"));

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
//  console.log(removeShorterStrings(["Hello", "There", "my", "name", "is", "kevin"],3));
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
  // console.log(reverseString("Hello world this is Kevin"));

  //Another example of a reverse String method

  function reverseString2(str) {
    var newStr = "";
    for(var i = str.length-1; i >= 0; i--) {
      newStr += str[i];
    }
    str = newStr;
    return str;
  }
  // console.log(reverseString2("Hello world this is Kevin"));

  /**
   * Remove Even-Length Strings
   * Build a standalone function to remove strings of even lengths 
   * from a given array. For array containing ["Nope!","Its","Kris","starting","with","K!"," 
   * (instead","of","Chris","with","C)","."] , 
   * change that same array to ["Nope!","Its","Chris","."] .
   */

function removeEvenLengthStrings(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length % 2 == 0) {
      for(var j = i; j < arr.length; j++) {
        arr[j] = arr[j+1];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
}
// console.log(removeEvenLengthStrings(["Past", "time", "with", "kevin"]));
//output ["kevin"]

/**
 * Integer to Roman Numerals
 * Given a positive integer that is less than 4000, return a string containing 
 * that value in Roman numeral representation. In this representation, 
 * I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000.
 * Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
 */
function integerToRomanNumerals(num) {
  if(num >= 4000 || num < 0) {
    return "Please enter a number less than 4000 and greater than 0.";
  }
  // extra values are added in to make sure you would not use IIII instead of IV
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
    for(var j = 1; j <= Math.floor(num / arr[i][1]); j++) {
      roman += arr[i][0];
    }
    num %= arr[i][1];
  }
  return roman;
}
// console.log(integerToRomanNumerals(3104));

/**
 * Roman Numerals to Integer
 * Sept 16, 2014 headline: “ Ancient Computer Found in Roman Shipwreck ”. 
 * Comprising 30 bronze gears, its wooden frame features 2000 characters. 
 * Given a string containing a Roman numeral representation of a positive 
 * integer, return the integer. Remember that III is
 * 3 , DCIX is 609 and MXDII is 1492 .
 */

 function romanNumeralsToInteger(str) {
    var obj = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    var num = 0;
    for(var i = 0; i < str.length; i++) {
      if(obj.hasOwnProperty(str[i])) {
        if(obj[str[i+1]] > obj[str[i]]) {
          num -= obj[str[i]];
        } else {
          num += obj[str[i]];
        }
      } else {
        return "Invalid roman numeral";
      }
    }
    return num;
 }
//  console.log(romanNumeralsToInteger("CXXXV"));
 //output 135
//  console.log(romanNumeralsToInteger("MMCCXXVI"));
 //output 2226

 /**
  * Parens Valid
  * Create a function that, given an input string str , 
  * returns a boolean whether parentheses in str are valid. 
  * Valid sets of parentheses always open before they close,
  * for example. For "Y(3(p)p(3)r)s" , return true . Given "N(0(p)3" , 
  * return false : not every parenthesis is closed. Given "N(0)t ) 0(k" , 
  * return false , because the underlined ")" 
  * is premature: there is nothing open for it to close.
  */
 function parenValid(str) {
   var valid = 0;
   for(var i = 0; i < str.length; i++) {
     if(str[i] == "(") {
       valid++;
     }
     if(str[i] == ")") {
       valid--;
     }
     if(valid < 0) {
       return false;
     } 
   }
   if(valid !== 0) {
     return false;
   } else {
     return true;
   }
 }

//  console.log(parenValid("H(e(l(l(o))))"));
 //true
//  console.log(parenValid("He(l))l(o)"));
 // false

 /**
  * Braces Valid
  * Given a sequence of parentheses, braces and brackets, 
  * determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true . 
  * "D(i{a}l[ t]o)n{e" => false . "A(1)s[O (n]0{t) 0}k" => false .
  */
