/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

https://www.codewars.com/kata/580a4734d6df748060000045 */

//Solution
function isSortedAndHow(array) {
    let ascending = (a,b) => a - b;
    let descending = (a,b) => b - a;
    
    if(JSON.stringify(array.slice().sort(ascending)) == JSON.stringify(array)){
      return 'yes, ascending'
    }
    
    if(JSON.stringify(array.slice().sort(descending)) == JSON.stringify(array)){
      return 'yes, descending'
    }
    
    return 'no'
}