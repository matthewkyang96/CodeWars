function findLongest(array){
    return array.reduce((num,curr) =>{
      if(curr.toString().length > num.toString().length){
        return curr
      }
      return num
    },0)
  }