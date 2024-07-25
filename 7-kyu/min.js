function min(arr, toReturn) {
  let min = Math.min(...arr);
  return toReturn == "value" ? min : arr.indexOf(min);
}
