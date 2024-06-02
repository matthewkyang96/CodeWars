function isPowerOfTwo(n){
    while(n >= 1){
      if(n == 1){
        return true
      }
      n /= 2;
    }
    return false
  }