function Counter() {
  this.value = 0;
}

Counter.prototype.incr = function () {
  this.value++;
};

Counter.prototype.valueOf = function () {
  return this.value;
};
