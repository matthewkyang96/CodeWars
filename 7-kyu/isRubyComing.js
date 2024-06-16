function isRubyComing(list) {
  
    for(let i = 0; i < list.length; ++i){
      if(list[i].language == 'Ruby'){
        return true
      }
    }
    
    return false;
  }