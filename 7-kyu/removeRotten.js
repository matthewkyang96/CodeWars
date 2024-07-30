function removeRotten(bagOfFruits) {
  return bagOfFruits
    ? bagOfFruits.map((fruit) => {
        if (fruit.includes("rotten")) {
          return fruit.toLowerCase().split("rotten").join("");
        }
        return fruit;
      })
    : [];
}
