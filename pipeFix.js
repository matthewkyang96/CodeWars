/* Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 

https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
*/

//Solution
function pipeFix(numbers){
    let result = [];
    for(let i = numbers[0]; i <= numbers.slice(-1); i++){
      result.push(i);
    }
    return result;
  }