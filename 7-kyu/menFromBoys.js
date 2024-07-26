function menFromBoys(arr) {
  const pArr = Array.from(new Set(arr));
  let evenArr = pArr.filter((num) => num % 2 == 0).sort((a, b) => a - b);
  let oddArr = pArr.filter((num) => num % 2 !== 0).sort((a, b) => b - a);

  return evenArr.concat(oddArr);
}
