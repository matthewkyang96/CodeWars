function halvingSum(n) {
    let sum = 0;
    while(n > 0){
      sum += n;
      n = Math.floor(n/2)
    }
  
  return sum
}