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

    x = (x + dx + fighters[0].length) % fighters[0].length;
    y = Math.max(0, Math.min(y + dy, fighters.length - 1));

    res.push(fighters[y][x]);
  }
  return res;
}
