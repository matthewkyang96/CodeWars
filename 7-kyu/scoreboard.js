function scoreboard(whoAteWhat) {
  const points = {
    chickenwings: 5,
    hamburgers: 3,
    hotdogs: 2,
  };

  const scoreBoard = [];

  for (let person of whoAteWhat) {
    const score = {};
    score.name = person.name;
    score.score =
      person.chickenwings * points.chickenwings +
      person.hamburgers * points.hamburgers +
      person.hotdogs * points.hotdogs;
    scoreBoard.push(score);
  }

  scoreBoard.sort((a, b) => {
    if (b.score - a.score == 0) {
      return a.name.localeCompare(b.name);
    }
    return b.score - a.score;
  });

  return scoreBoard;
}
