function boredom(staff) {
  const scores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  let sum = 0;
  for (let person in staff) {
    sum += scores[staff[person]];
  }

  if (sum <= 80) {
    return "kill me now";
  } else if (sum < 100 && sum > 80) {
    return "i can handle this";
  }

  return "party time!!";
}
