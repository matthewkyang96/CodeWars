function calc(x) {
  let total1 = "";
  x.split("").forEach((char) => {
    total1 += char.charCodeAt(0);
  });

  let total2 = total1
    .split("")
    .map((char) => (char == 7 ? 1 : char))
    .join("");

  return (
    total1.split("").reduce((a, b) => +a + +b) -
    total2.split("").reduce((a, b) => +a + +b)
  );
}
