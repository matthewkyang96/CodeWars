var palindromeChainLength = function(n) {
  
    if(n.toString() == n.toString().split('').reverse().join('')){
      return 0
    } else {
      return 1 + +palindromeChainLength(n + +n.toString().split('').reverse().join(''))
    }
  };