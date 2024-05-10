function repeats(arr){
    let map = {};
     for(let ele of arr){
       map[ele] = (map[ele] || 0)  + 1 
     }
     
     let sum = 0;
     
     for(let ele in map){
       if (map[ele] == 1){
         sum += Number(ele)
       }
     }
     return sum
   };