function differenceOfSquares(n) {
  let sqOfSum = 0;
  let sumOfSq = 0;
  for (let i = 1; i <= n; i++) {
    sqOfSum += i;
    sumOfSq += i ** 2;
  }

  return sqOfSum ** 2 - sumOfSq;
}
