function strong(n) {
  let digitsFac = n
    .toString()
    .split("")
    .reduce((accum, curr) => accum + factorial(+curr), 0);
  return n === digitsFac ? "STRONG!!!!" : `Not Strong !!`;
}

function factorial(n) {
  let result = 1;
  while (n != 0) {
    result *= n;
    n--;
  }
  return result;
}
