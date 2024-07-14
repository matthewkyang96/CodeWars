function longestRepetition(s) {
  let count = 0;
  let prevLetter = "";

  return s
    .toLowerCase()
    .split("")
    .reduce(
      (accum, curr) => {
        if (curr == prevLetter) {
          count++;
        } else {
          count = 1;
        }

        if (count > accum[1]) {
          accum[0] = curr;
          accum[1] = count;
        }

        prevLetter = curr;
        return accum;
      },
      ["", 0]
    );
}
