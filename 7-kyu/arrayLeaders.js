function arrayLeaders(numbers) {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers.slice(i + 1).reduce((a, b) => a + b, 0)) {
      res.push(numbers[i]);
    }
  }
  return res;
}
