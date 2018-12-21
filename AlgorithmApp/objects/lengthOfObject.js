/**
 * 1 Find the length of the javascript object
 */

 var student = {
     name: "Kevin Stradtman",
     sclass: "V1",
     rollno: 12
 }

 Object.size = function(obj) {
     var size = 0, key;
     for(key in obj) {
         if(obj.hasOwnProperty(key)) size++;
     }
     return size;
 };

 var size = Object.size(student);
 console.log(size);