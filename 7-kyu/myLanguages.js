function myLanguages(results) {
  let keysSorted = Object.keys(results)
    .filter((key) => results[key] >= 60)
    .sort(function (a, b) {
      return results[b] - results[a];
    });

  return keysSorted;
}
