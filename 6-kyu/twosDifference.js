function twosDifference(input) {
  input.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < input.length; i++) {
    let comp = input[i] + 2;
    if (input.includes(comp)) {
      result.push([input[i], comp]);
    }
  }
  return result;
}
