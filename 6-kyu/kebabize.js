function kebabize(str) {
  let strArr = str.split("");
  return strArr
    .map((char) => {
      if (
        str.indexOf(char) !== 0 &&
        char == char.toUpperCase() &&
        !Number.isInteger(+char)
      ) {
        return "-" + char.toLowerCase();
      } else if (Number.isInteger(+char)) {
        console.log(char);
        return "";
      }
      return char.toLowerCase();
    })
    .join("");
}
