/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
  let sides = [a, b, c];
  let angleC = findAngle(a, b, c);
  let angleB = findAngle(a, c, b);
  let angleA = findAngle(b, c, a);

  let angles = [angleA, angleB, angleC];

  console.log(angles);

  if (angles.some((angle) => isNaN(angle)) || angles.includes(180)) {
    return 0;
  }

  if (angles.every((angle) => angle < 90)) {
    return 1;
  }

  if (angles.find((angle) => angle == 90)) {
    return 2;
  }

  return 3;
}

function findAngle(a, b, c) {
  let angle;
  angle = Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));
  return (angle * 180) / Math.PI;
}
