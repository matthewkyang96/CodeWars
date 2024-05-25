function divCon(x){
    return x.reduce((accum,num) => {
      if(Number.isInteger(num)){
        return accum + num
      }
      return accum - Number(num)
    },0)
  }