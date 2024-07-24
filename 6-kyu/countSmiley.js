//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;

  const faceFeatures = {
    eyes: [";", ":"],
    nose: ["-", "~"],
    mouth: [")", "D"],
  };

  arr.forEach((face) => {
    let faceArr = face.split("");

    if (face.length > 3) {
      return;
    }

    if (faceFeatures.eyes.includes(face[0])) {
      if (faceFeatures.mouth.includes(face.slice(-1))) {
        count++;
        if (faceArr.length > 2) {
          if (!faceFeatures.nose.includes(face[1])) {
            count--;
          }
        }
      }
    }
  });

  return count;
}
