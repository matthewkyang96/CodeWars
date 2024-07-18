var findMissing = function (list) {
  var expected_sum =
    ((list[0] + list[list.length - 1]) * (list.length + 1)) / 2;
  var sum = list.reduce(function (acc, x) {
    return acc + x;
  });
  return expected_sum - sum;
};
