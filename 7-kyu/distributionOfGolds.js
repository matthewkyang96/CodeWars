function distributionOf(golds) {
  let beggarsPile = [0, 0];
  let beggar = 0;

  while (golds.length !== 0) {
    let max;
    if (golds[0] >= golds.slice(-1)) {
      max = golds.shift();
    } else {
      max = golds.pop();
    }

    beggarsPile[beggar] += max;

    beggar = beggar == 0 ? 1 : 0;
  }
  return beggarsPile;
}
