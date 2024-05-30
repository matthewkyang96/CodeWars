function partlist(arr) {
    let result = [];
      for(let i = 0; i < arr.length -1 ; ++i){
        result.push([arr.slice(0,i+1).join(' '),arr.slice(i+1).join(' ')])
      }
    return result
  }