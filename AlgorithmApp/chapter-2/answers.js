/**
 * Sigma
 * Implement function sigma(num) that given a number, 
 * returns the sum of all positive integers up to number (inclusive). 
 * Ex.: sigma(3) = 6 (or 1 + 2 + 3 ); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5 ).
 */	
function sigma(num) {
  var sum = 0;
  for(var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sigma(5));
//output 15

/**
 * Factorial
 * Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that,
 *  given a number, returns the product (multiplication) of all positive 
 * integers from 1 up to number (inclusive). 
 * For example, factorial(3) = 6 (or 1 * 2 * 3 ); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5 ).
 */

function factorial(num) {
  var mult = num;
  for(var i = num-1; i > 0; i--) {
    mult *= i;
  }
  return mult;
}
// console.log(factorial(5));
//output 120
// console.log(factorial(6));
//output 720

/**
 * Star Art
 * Assume that you have a text field that is exactly 75 characters long. 
 * You want to fill it with spaces and asterisks ( '*' ), sometimes called stars . 
 * You should print the given number of asterisks consecutively. Depending on which 
 * function is called, those stars should be left-justified (first star would be very first char in the text field), 
 * or right-justified (last star would be very last char in the text field, with potentially some number 
 * of spaces at beginning of text field before the block of stars start), or centered in the 75-character 
 * text field (with same number of spaces on either side of the block of stars, plus/minus one).
 * Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
 * Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side.
 *  The last num characters should be asterisks; the other 75 should be spaces.
 * Write function drawCenteredStars(num) that prints 75 characters total. 
 * The stars should be centered in the 75. The middle num characters should be asterisks; the rest
 * of the 75 spaces.
 * (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like
 * ( =*=) and >o< .
 */
function drawLeftStars(num) {
  var stars = '';
  for(var i = 1; i <= num; i++) {
    stars += "*";
  }
  console.log(stars);
}
// drawLeftStars(60);

function drawRightStars(num) {
  var stars = '';
  for(var i = 1; i <= 75-num; i++) {
    stars += " ";
  }
  for(var i = 1; i <= num; i++) {
    stars += "*";
  }
  console.log(stars);
}
// drawRightStars(10);

function drawCenteredStars(num) {
  var stars = '';
  for(var i = 1; i <= Math.ceil(75/2-num/2); i++) {
    stars += " ";
  }
  for(var i = 1; i <= num; i++) {
    stars += "*";
  }
  for(var i = 1; i <= Math.ceil(75/2-num/2); i++) {
    stars += " ";
  }
  console.log(stars);
}
// drawCenteredStars(30);

/**
 * Generate Coin Change
 * Change is inevitable (especially when breaking a twenty). 
 * Make generateCoinChange(cents) . Accept a number of American cents, 
 * compute and print how to represent that amount with smallest number of coins. 
 * Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
 */

 function generateCoinChange(cents) {
   var coins = [100,50,25,10,5,1];
   var result = [];
   for(var i = 0; i < coins.length; i++) {
    result.push(Math.floor(cents/coins[i]));
    cents %= coins[i];
   }
   return result;
 }
 console.log(generateCoinChange(139));


 function fibonacci(num) {
   var sum = 0, i = 0, j = 1;
   while(num > 1) {
     sum = i + j;
     i = j;
     j = sum;
     num--;
   }
   return sum;
 }
 console.log(fibonacci(8));

 /**
  * Sum to One Digit
  * Kaitlin sees beauty in numbers, but also believes that less is more. 
  * Implement sumToOne(num) that sums a given integer’s digits repeatedly 
  * until the sum is only one digit. Return that one-digit result. 
  * Example: sumToOne(928) returns 1 , because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1 .
  */
 function sumToOne(num) {
   if(num < 10) {
     return num;
   }
   var str = num.toString();
   var sum = 0;
   for(var i = 0; i < str.length; i++) {
    sum += Number(str[i]);
   }
   return sumToOne(sum);
 }

 console.log(sumToOne(1099901));

 /**
  * Is Prime
  * Return whether a given integer is prime. Prime numbers are only 
  * evenly divisible by themselves and 1. Many highly optimized solutions 
  * exist, but for now just create one that is easy to understand and debug .
  */

  function isPrime(num) {
    for(var i = num - 1; i > 1; i--) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(11));