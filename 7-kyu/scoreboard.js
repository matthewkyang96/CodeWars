function scoreboard(whoAteWhat) {
  return whoAteWhat
    .map((person) => {
      return {
        name: person.name,
        score:
          person.chickenwings * 5 + person.hamburgers * 3 + person.hotdogs * 2,
      };
    })
    .sort((a, b) => b.score - a.score || a.name > b.name);
}
