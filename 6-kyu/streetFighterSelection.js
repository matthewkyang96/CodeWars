function streetFighterSelection(fighters, position, moves) {
  const direction = {
    up: [0, -1],
    down: [0, 1],
    right: [1, 0],
    left: [-1, 0],
  };

  let res = [];
  let [y, x] = position;

  for (let move of moves) {
    let [dx, dy] = direction[move];
    x += dx;
    y += dy;

    if (y < 0) {
      y = 0;
    }

    if (x < 0) {
      x = fighters[0].length - 1;
    }

    if (y > fighters.length - 1) {
      y = 1;
    }

    if (x > fighters[0].length - 1) {
      x = 0;
    }
    res.push(fighters[y][x]);
  }
  return res;
}
