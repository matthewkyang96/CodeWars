Math.ceil = function (x) {
  if (x % 1 > 0) {
    return x - (x % 1) + 1;
  }
  return x;
};

Math.floor = function (x) {
  if (x % 1 > 0) {
    return x - (x % 1);
  }

  return x;
};

Math.round = function (x) {
  if (x % 1 >= 0.5) {
    return Math.ceil(x);
  }
  return Math.floor(x);
};

Math.abs = function (x) {
  if (x < 0) {
    return x * -1;
  }
  return x;
};

Math.max = function (...args) {
  args.sort((a, b) => a - b);
  return args.slice(-1)[0];
};

Math.min = function (...args) {
  args.sort((a, b) => a - b);
  return args[0];
};

Math.pow = function (x, y) {
  return x ** y;
};
