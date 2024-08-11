function mygcd(x, y) {
  if (y == 0) {
    return x;
  }
  return mygcd(y, x % y);
}
