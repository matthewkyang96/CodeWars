function tidyNumber(n) {
  return n == n.toString().split("").sort().join("") ? true : false;
}
