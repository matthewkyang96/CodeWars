Dog.prototype.checkDog = function () {
  if (this.vaccinated && this.wormed) {
    return this.name + ` can be accepted`;
  }

  if (this.vaccinated || this.wormed) {
    return this.name + " can only be accepted by itself";
  }

  return this.name + " can not be accepted";
};
