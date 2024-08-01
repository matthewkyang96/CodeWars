class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
  }

  interact(quark) {
    [this.color, quark.color] = [quark.color, this.color];
  }
}
