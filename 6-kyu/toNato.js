function toNato(words) {
  const punctuation = ",.!?";
  let wordsCap = words.toUpperCase();

  let x = wordsCap
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char) => {
          return punctuation.includes(char) ? char : NATO[char];
        })
        .join(" ");
    })
    .join(" ");
  // you can access the preloaded NATO dictionary
  // NATO['A'] === 'Alfa', etc.
  return x;
}
