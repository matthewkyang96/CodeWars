function pascalsTriangle(n) {
  if (n == 0) return [];

  const result = [];

  for (let row = 1; row <= n; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col == 0 || col == row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(arr);
  }
  console.log(result);
  return result.flat();
}
