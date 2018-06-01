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