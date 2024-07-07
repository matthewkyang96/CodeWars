function evenNumbers(array, number) {
    let result =[];
    array.forEach(num => {
      if(num % 2 == 0){
        result.push(num)
      }
    })
    return result.slice(-number)
  }