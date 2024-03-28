//https://www.codewars.com/kata/5592e3bd57b64d00f3000047

//Solution
function findNb(m) {
    let n = 0;
    
    while(m > 0){
      n++;
      m -= n ** 3;
    }
    
    return m === 0 ? n : -1 ;
  }