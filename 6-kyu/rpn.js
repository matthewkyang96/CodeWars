/* Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/javascript/6611b47ace34ec012a550cf3 */

//Solution
function calc(expr) {
    let stack = [];
    let methods = {
      "+" : (a,b) => a + b,
      "-" : (a,b) => a - b,
      "*" : (a,b) => a * b,
      "/" : (a,b) => a / b,
    }
    
    expr.split(' ').forEach(ele =>{
      if(!isNaN(Number(ele))){
        stack.push(Number(ele))
      } else {
        let b = stack.pop();
        let a = stack.pop();
        let res = methods[ele](a,b)
        stack.push(res)
      }
    })
    
    return stack.pop();
  }