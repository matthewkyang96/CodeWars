function minSum(arr) {
    arr.sort((a,b) => a - b);
    let sum = 0;
    while(arr.length != 0){
      sum += arr.shift() * arr.pop();
    }
    return sum
  }