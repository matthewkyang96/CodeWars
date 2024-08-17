function capitalize(s, arr) {
  let string = s.split("");
  for (let index of arr) {
    try {
      string[index] = string[index].toUpperCase();
    } catch (e) {
      console.log(e);
    }
  }
  return string.join("");
}
