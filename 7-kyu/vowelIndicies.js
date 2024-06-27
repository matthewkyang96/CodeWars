function vowelIndices(word){
    const vowels = 'aeiouy';
    let result = [];
    
    word.split('').forEach((char,i) =>{
      if(vowels.includes(char.toLowerCase())){
        result.push(i+1)
      }
    })
    
    return result
  }