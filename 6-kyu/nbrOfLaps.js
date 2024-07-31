var nbrOfLaps = function (x, y) {
  const gcdValue = gcd(x, y);
  const lcm = (x * y) / gcdValue;
  return [lcm / x, lcm / y];
};

function gcd(a, b) {// 4 ,6
  while (b !== 0) {
    let temp = b; // temp = 6 // temp = 4 // temp = 2
    b = a % b; // b = 4 // b = 2 // b = 0
    a = temp; // a = 6 // a = 4 // a = 2
  }
  return a;
}
