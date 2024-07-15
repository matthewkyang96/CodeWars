function stringTransformer(str) {
  return str
    .split("")
    .map((char) => {
      if (char == char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}
