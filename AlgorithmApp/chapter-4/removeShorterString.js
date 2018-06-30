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
        }
    }
    return arr;
}
console.log(removeShorterStrings(['hello', 'there', 'my', 'name', 'is', 'kevin s'], 4));