const orderedCount = function (text) {
    let dict = new Map();
    text.split('').forEach(char =>{
      dict.set(char, (dict.get(char) || 0) + 1);
    })
    
    return Array.from(dict);
  }