function findChildren(dancingBrigade) {
  return dancingBrigade
    .split("")
    .sort((a, b) => {
      let aLower = a.toUpperCase();
      let bLower = b.toUpperCase();

      if (aLower === bLower) {
        return a < b ? -1 : 1;
      } else {
        return aLower < bLower ? -1 : 1;
      }
    })
    .join("");
}
