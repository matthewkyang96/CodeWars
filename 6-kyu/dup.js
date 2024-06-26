/* In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

https://www.codewars.com/kata/59f08f89a5e129c543000069 */

//Solution
function dup(s) {
  return s.map((word) => {
    return word
      .split("")
      .filter((char, i, arr) => char !== arr[i - 1])
      .join("");
  });
}
