Array.prototype.even = function () {
  return this.filter((num) => num % 2 == 0 && Number.isInteger(num));
};

Array.prototype.odd = function () {
  return this.filter((num) => num % 2 == 1 && Number.isInteger(num));
};

Array.prototype.under = function (x) {
  return this.filter((num) => num < x && Number.isInteger(num));
};

Array.prototype.over = function (x) {
  return this.filter((num) => num > x && Number.isInteger(num));
};

Array.prototype.inRange = function (min, max) {
  return this.filter(
    (num) => num >= min && num <= max && Number.isInteger(num)
  );
};
