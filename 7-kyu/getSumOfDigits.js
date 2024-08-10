function getSumOfDigits(integer) {
  var sum = null;
  var digits = integer.toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}
