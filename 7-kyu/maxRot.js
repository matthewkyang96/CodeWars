function maxRot(n) {
  let max = n;
  let nString = n.toString();
  for (let i = 0; i < nString.length - 1; i++) {
    let anchor = nString.slice(0, i);
    let rotate = nString.slice(i);

    rotate = rotate.slice(1) + rotate[0]; // Move the first digit of rotate to the end
    let potMax = anchor + rotate;
    console.log(potMax);
    if (Number(potMax) > max) {
      max = Number(potMax);
    }

    nString = potMax;
  }

  return max;
}
