function countLanguages(list) {
  let langs = {};
  for (let obj of list) {
    langs[obj.language] = (langs[obj.language] || 0) + 1;
  }
  return langs;
}
