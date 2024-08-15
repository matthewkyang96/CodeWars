// Fix the sort() method for arrays here.

Array.prototype.sort = function () {
  let swapped;

  for (let i = 0; i < this.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return this;
};
