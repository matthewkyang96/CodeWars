function constructionWorker(firstName, lastName, age, gender, married, boss) {
  const obj = person(
    firstName,
    lastName,
    age,
    gender,
    true,
    "construction worker",
    married
  );
  obj.boss = boss;
  obj.sayBossName = function () {
    return `My boss is called ${boss} and is a very nice person!`;
  };

  return obj;
}
