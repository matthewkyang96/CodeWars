function transpose(matrix) {
  let transposedMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    // 0 - 2
    let subArr = [];
    for (let row = 0; row < matrix.length; row++) {
      // 0 - 1
      subArr.push(matrix[row][col]);
    }
    transposedMatrix.push(subArr);
  }

  return transposedMatrix;
}
