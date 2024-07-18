function nthSmallest(arr, pos) {
  arr.sort((a, b) => a - b);
  return arr[pos - 1];
}
