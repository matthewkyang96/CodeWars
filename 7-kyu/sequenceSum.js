var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if(count < 0){
        return `${count}<0`
      } else if(count == 0){
        return `0=0`
      }
      let result = [];
      
      for(let i = 0; i <= count; i++){
        result.push(i)
      }
      
      let sum = result.reduce((x,y) => x + y,0)
      
      return `${result.join('+')} = ${sum}`
      
    };
  
    return SequenceSum;
  
  })();