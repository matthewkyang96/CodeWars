function sortMyString(S) {
    let even = '';
    let odd = '';
    
    S.split('').forEach((char,i) => {
      if(i % 2 == 0){
        even += char;
      } else{
        odd += char;
      }
    })
  
    
      return even + ' ' + odd;
  }