function automorphic(n) {
  return Math.pow(n, 2).toString().endsWith(n.toString())
    ? "Automorphic"
    : "Not!!";
}
