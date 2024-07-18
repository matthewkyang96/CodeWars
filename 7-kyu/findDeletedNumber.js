function findDeletedNumber(arr, mixArr) {
  let sumArr = arr.reduce((x, y) => x + y, 0);
  let mixedSumArr = mixArr.reduce((x, y) => x + y, 0);
  return sumArr - mixedSumArr;
}
