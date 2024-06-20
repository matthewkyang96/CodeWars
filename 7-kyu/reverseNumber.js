function reverseNumber(n) {
    if(n < 0){
       let result = n.toString().split('').slice(1).reverse().join('');
      return result * -1
    }
    
    return + n.toString().split('').reverse().join('')
  
  }