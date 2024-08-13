Boolean.prototype.toString = function () {
  return this.valueOf() ? "true" : "false";
};

Number.prototype.toString = function () {
  return "" + this.valueOf();
};

Array.prototype.toString = function () {
  return "[" + this.valueOf().join(", ") + "]";
};
