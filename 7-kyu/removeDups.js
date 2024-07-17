function solve(arr) {
  let numSet = new Set(arr.reverse());
  return Array.from(numSet).reverse();
}
