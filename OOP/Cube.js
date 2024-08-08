class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return this.length ** 2 * 6;
  }

  get volume() {
    return this.length ** 3;
  }

  set surfaceArea(sa) {
    this.length = (sa / 6) ** (1 / 2);
  }

  set volume(v) {
    this.length = v ** (1 / 3);
  }
}
