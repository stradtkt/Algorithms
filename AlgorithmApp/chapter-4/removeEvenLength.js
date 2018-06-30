/**
 * Remove Even-Length Strings
 * Build a standalone function to remove strings of even lengths from a given array. 
 * For array containing ["Nope!","Its","Kris","starting","with","K!"," (instead","of","Chris","with","C)","."] , 
 * change that same array to ["Nope!","Its","Chris","."] .
 */

 function removeEvenLengthedStrings(arr) {
     for(var i = 0; i < arr.length; i++) {
         if(arr[i].length % 2 === 0) {
             for(var j = i; j < arr.length; j++) {
                 arr[j] = arr[j+1];
             }
             arr.length--;
             i--;
         }
     }
     return arr;
 }
 console.log(removeEvenLengthedStrings(['hello', 'my', 'name', 'is', 'kevin']));