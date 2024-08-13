function solve(arr) {
  let set = new Set(arr);
  return Array.from(set).reduce((a, b) => a + b);
}
