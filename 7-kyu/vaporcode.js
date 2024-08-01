function vaporcode(string) {
  return string
    .split(" ")
    .join("")
    .split("")
    .map((char) => char.toUpperCase())
    .join("  ");
}
