function foldTo(distance) {
  let thickness = 0.0001;
  let count = 0;

  while (thickness < distance) {
    thickness *= 2;
    count++;
  }

  if (distance < 0) return null;
  return count;
}
