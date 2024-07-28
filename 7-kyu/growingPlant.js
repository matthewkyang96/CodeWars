function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 1;

  for (let height = upSpeed; height < desiredHeight; height += upSpeed) {
    height -= downSpeed;
    day++;
  }

  return day;
}
