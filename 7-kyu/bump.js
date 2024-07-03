function bump(x){
    let bumps = 0;
    x.split('').forEach(tile =>{
      if(tile === 'n'){
        bumps++
      }
    })
    
    return bumps > 15 ? 'Car Dead' : 'Woohoo!'
    
  }