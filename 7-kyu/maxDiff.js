function maxDiff(list) {
    if(list.length){
      return Math.max(...list) - Math.min(...list)
    }
    return 0;
  };