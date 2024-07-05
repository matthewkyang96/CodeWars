function predictAge(...ages){
    let squaredSum = ages.map(age => age*age).reduce((accum,curr)=> accum + curr)
    return Math.floor(Math.floor(Math.pow(squaredSum,1/2))/2)
  }