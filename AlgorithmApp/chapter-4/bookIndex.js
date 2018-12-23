/**
 * Book Index
 * Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappella fugues. 
 * Some of ‘those fugueing challenges’ are less popular than others, so he needs an index. Given a sorted array
 * of pages where a term appears, produce an index string. Consecutive pages should 
 * form ranges separated by a hyphen. For [1,13,14,15,37,38,70] , return string "1, 13-15, 37-38, 70" .
 * Take care to get all the commas and spaces correct: Martin is palpably particular (practically persnickety!) about patchy punctuation.
 */

 function bookIndex(arr) {
     var str = "";
     for(var i = 0; i < arr.length; i++) {
         if(i < arr.length && i != 0) {
             str += ", ";
         }
         if(arr[i+1] == arr[i]+1) {
             var start = arr[i];
             while(arr[i+1] == arr[i]+1) {
                 i++;
             }
             var end = arr[i];
             str += start + "-" + end;
         } else {
             str += arr[i];
         }
     }
     return str;
 }
 console.log(bookIndex([1,13,14,15,37,38,70]));