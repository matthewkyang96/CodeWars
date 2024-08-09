function maxProduct(numbers, size) {
  numbers.sort((a, b) => b - a);
  let subArr = numbers.slice(0, size);
  return subArr.reduce((a, c) => a * c, 1);
}
