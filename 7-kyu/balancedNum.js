function balancedNum(number) {
  let numString = number.toString();
  let numLength = numString.length;

  if (numLength <= 2) {
    return "Balanced";
  }

  let middleIndex = Math.floor(numLength / 2);

  let leftSum = [
    ...numString.slice(0, middleIndex - (numLength % 2 === 0 ? 1 : 0)),
  ].reduce((sum, digit) => sum + +digit, 0);

  let rightSum = [...numString.slice(middleIndex + 1)].reduce(
    (sum, digit) => sum + +digit,
    0
  );

  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}
