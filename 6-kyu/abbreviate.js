function abbreviate(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length < 4) {
        return word;
      }
      if (word.indexOf("-") !== -1) {
        return word
          .split("-")
          .map(
            (subWord) =>
              (subWord = subWord[0] + (subWord.length - 2) + subWord.slice(-1))
          )
          .join("-");
      }
      if (word.includes(",")) {
        return (word = word[0] + (word.length - 3) + word.slice(-2, -1) + ",");
      }
      return (word = word[0] + (word.length - 2) + word.slice(-1));
    })
    .join(" ");
}
