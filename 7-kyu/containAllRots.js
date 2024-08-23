function containAllRots(strng, arr) {
  if (strng == "") {
    return true;
  }
  let rotations = [];
  for (let i = 0; i < strng.length; i++) {
    strng = strng.slice(-1) + strng.slice(0, strng.length - 1);
    rotations.push(strng);
  }

  for (let rotation of rotations) {
    if (!arr.includes(rotation)) {
      return false;
    }
  }
  return true;
}
