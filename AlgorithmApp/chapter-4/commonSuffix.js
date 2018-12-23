/**
 * Common Suffix
 * Lance is writing his opus: Epitome , an epic tome of beat poetry. Always ready for a good rhyme, he constantly 
 * seeks words that end with the same letters. Write a function that, when given a word array, returns the largest suffix 
 * (word-end) common to all words in the array. For inputs ["deforestation", "citation", "conviction", "incarceration"] , 
 * return "tion" (not all that creative a rhyming point). If it is ["nice", "ice", "baby"] , return "" , because that’s just … not .
 */

 function commonSuffix(arr) {
     var index = 0;
     var suffix = "";
     var commonSuffix = "";
     var minLength = arr[0].length;

     for(var i = 1; i < arr.length; i++) {
         if(arr[i].length < minLength) {
             minLength = arr[i].length;
         }
     }
     while(index <= minLength) {
         var temp = [];
         for(var word of arr) {
             temp.push(word[word.length-1-index]);
         }

         for(var i = 0; i < temp.length-1; i++) {
             if(temp[i] !== temp[i+1]) {
                 for(var j = suffix.length-1; j >= 0; j--) {
                     commonSuffix += suffix[j];
                 }
                 console.log("Common suffix is: " + commonSuffix);
                 return commonSuffix;
             }
         }
         suffix += temp[0];
         index++
     }
 }

 commonSuffix(["deforestation", "citation", "conviction", "incarceration"]); // tion
 commonSuffix(["nice", "ice", "baby"]); // ""
