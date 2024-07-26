function triangle(row) {
  const combination = "RGB";

  if (row.length == 1) {
    return row;
  }

  let suceedingRow = "";
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] == row[i + 1]) {
      suceedingRow += row[i];
    } else {
      suceedingRow += combination
        .split("")
        .filter((color) => !(row[i] + row[i + 1]).includes(color))
        .join("");
    }
  }

  return triangle(suceedingRow);
}
