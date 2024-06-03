function countDevelopers(list) {
    let result = 0
    for(let developer of list){
      if(developer.continent == 'Europe' && developer.language == 'JavaScript'){
        result++
      }
    }
    return result
  }