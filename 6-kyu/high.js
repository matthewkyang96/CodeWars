/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272 */

//Solution
function high(x){
    let xArray = x.split(' ');
    let valueArr = xArray.map(str => {
      let value = 0;
      for(let i = 0; i < str.length; i++){
        value += str.charCodeAt(i) - 96
      }
      return value;
    });
    
    let maxValue = Math.max(...valueArr)
    let maxValueIndex = valueArr.indexOf(maxValue);
    
    return xArray[maxValueIndex]
}