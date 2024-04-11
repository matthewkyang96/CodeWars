/* In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

https://www.codewars.com/kata/59f08f89a5e129c543000069 */

//Solution
function dup(s) {
    return s.map(word => {
      let res = word[0]
      for(let i = 1; i < word.length; ++i){
        let prevChar = word[i-1];
        let char = word[i]
  
        if(char != prevChar){
         res += char 
        }
      }
      return res
  })}