function groupByCommas(n) {
  let numSection = [];
  let numString = n.toString();

  for (let i = 0; i < numString.length / 3; i++) {
    numSection.unshift(numString.slice(-3 * i - 3, numString.length - i * 3));
  }

  return numSection.join(",");
}
