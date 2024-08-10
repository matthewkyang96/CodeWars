function makeClass(...properties) {
  return class {
    constructor(...values) {
      properties.forEach((property, index) => {
        this[property] = values[index];
      });
    }
  };
}
