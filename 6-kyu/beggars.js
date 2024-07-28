function beggars(values, n) {
  const queueOfBeggars = new Array(n).fill(0);
  let pile = values.slice();

  function distribute(values, queueOfBeggars, beggarIndex) {
    //Base Case
    if (values.length === 0) {
      return queueOfBeggars;
    }

    queueOfBeggars[beggarIndex % n] += values.shift();

    return distribute(values, queueOfBeggars, beggarIndex + 1);
  }

  return distribute(pile, queueOfBeggars, 0);
}
