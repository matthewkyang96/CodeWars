function sqInRect(a, b, initial = true){
    if (a === b) { return initial ? null : [a] }  
    const min = Math.min(a, b)
    const max = Math.max(a, b)
      
    return [min, ...sqInRect(max - min, min, false)]
  }