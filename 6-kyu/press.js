function presses(phrase) {
  var buttons = {
    1: ["1"],
    2: ["A", "B", "C", "2"],
    3: ["D", "E", "F", "3"],
    4: ["G", "H", "I", "4"],
    5: ["J", "K", "L", "5"],
    6: ["M", "N", "O", "6"],
    7: ["P", "Q", "R", "S", "7"],
    8: ["T", "U", "V", "8"],
    9: ["W", "X", "Y", "Z", "9"],
    0: [" ", "0"],
    "*": ["*"],
    "#": ["#"],
  };

  return phrase
    .toUpperCase()
    .split("")
    .map((elm) =>
      Object.keys(buttons).map((current) => buttons[current].indexOf(elm) + 1)
    )
    .reduce(
      (sum, current) => sum + current.reduce((count, val) => count + val, 0),
      0
    );
}
