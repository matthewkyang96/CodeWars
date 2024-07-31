var nbrOfLaps = function (x, y) {
  let lcm = (x * y) / gcd(x, y);

  return [lcm / x, lcm / y];
};

function gcd(a, b) {// (4,6)
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b); // (6, 4) // (4, 2) // (2, 0)
}
