function disariumNumber(n) {
  return n ==
    n
      .toString()
      .split("")
      .reduce((a, b, i) => a + Math.pow(+b, i + 1), 0)
    ? "Disarium !!"
    : "Not !!";
}
