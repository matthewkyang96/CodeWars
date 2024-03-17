/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

https://www.codewars.com/kata/59cfc000aeb2844d16000075 
*/

//Solution
function capitalize(s){
    let s1 = '';
    let s2 = '';
    s.split('').forEach((char, index) =>{
      if(index % 2 == 0){
        s1 += char.toUpperCase();
        s2 += char;
      } else {
        s1 += char;
        s2 += char.toUpperCase();
      }
    })
    return [s1,s2];
  };