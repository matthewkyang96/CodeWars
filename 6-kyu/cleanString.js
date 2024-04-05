/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

https://www.codewars.com/kata/5727bb0fe81185ae62000ae3 */

//Solution
function cleanString(s) {
    let stack = [];
    
    s.split('').forEach(char => {
      if(char == "#"){
        stack.pop()
      } else{
        stack.push(char)
      }
    })
    
    return stack.join('')
  }