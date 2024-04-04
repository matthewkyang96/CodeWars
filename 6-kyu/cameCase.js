/* Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"

https://www.codewars.com/kata/587731fda577b3d1b0001196 
*/

//Solution
String.prototype.camelCase=function(){
    return this.split(' ').map(word => {
      return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
  }