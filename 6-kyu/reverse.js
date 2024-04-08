/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

https://www.codewars.com/kata/58d76854024c72c3e20000de */

//solution
function reverse(str){
  return str.trim().split(' ').map((word,i) =>{
    if(i % 2 == 1){
      return word.split('').reverse().join('')
    } else {
      return word
    }
  }).join(' ')
}