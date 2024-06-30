function lockerRun(lockers){
    let i = 0;
    let arr = [];
    for(i = 1; i*i <= lockers; i++){
      console.log(i*i)
      arr.push(i*i)
    }
    return arr
  }