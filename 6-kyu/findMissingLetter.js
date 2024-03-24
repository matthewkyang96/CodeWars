/* Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
*/

//Solution
function findMissingLetter(array){
    let charCode = array[0].charCodeAt(0);
    for(let i = 1; i < array.length; i++){
      if(array[i].charCodeAt(0) - charCode != 1){
        return String.fromCharCode(charCode +1)
      }
      charCode = array[i].charCodeAt(0);
    };
  }