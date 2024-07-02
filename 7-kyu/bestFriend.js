function bestFriend(txt, a, b) {
    for(let i=0; i < txt.length; ++i){
      if(txt[i] === a && txt[i+1] !== b){
        return false
      }
    }
    return true
  }