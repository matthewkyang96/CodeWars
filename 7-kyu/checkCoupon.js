/* Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
*/

//Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

    if(enteredCode !== correctCode 
       || Date.parse(currentDate) > Date.parse(expirationDate)){
      return false;
    }
    
    return true;
    
  }