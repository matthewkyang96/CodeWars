class Block {
  constructor(arr) {
    [this.width, this.length, this.height] = arr;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return (
      2 *
      (this.width * this.length +
        this.length * this.height +
        this.width * this.height)
    );
  }
}
