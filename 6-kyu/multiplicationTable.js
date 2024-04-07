/* Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript */

//Solution
const multiplicationTable = function(size) {
    let table = [];
    for(let i = 0; i < size; i++){
        table.push([])
      for(let j = 0; j < size; j++){
        table[i][j] = (i + 1) * (j + 1)
      }
    }
    
    return table
}