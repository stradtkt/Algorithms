/**
 * String: Is Palindrome
 * Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar" , 
 * return true . Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!" , return false .
 */

function isPalindrome(str) {
    var left = 0;
    var right = str.length - 1;
    while(left < right) {
        if(str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("a x a"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Dud"));
console.log(isPalindrome("Kevin"));