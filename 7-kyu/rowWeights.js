/* Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
*/

//Solution
function rowWeights(array){
    let result = [0,0]
    array.forEach((elem,index) => {
      if(index % 2 == 0){
        result[0] += elem
      } else {
        result[1] += elem
      }
    });
    
    return result
  }