function pairs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) == 1) {
      count++;
    }
  }

  return count;
}
