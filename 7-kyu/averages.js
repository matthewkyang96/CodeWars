function averages(numbers) {
  if (!numbers) {
    return [];
  }

  const res = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    res.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return res;
}
