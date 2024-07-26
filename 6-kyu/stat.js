function stat(strg) {
  if (!strg) {
    return "";
  }
  const statsArr = strg
    .split(", ")
    .map((stat) => stat.split("|").map(Number))
    .map(timeToSeconds);
  let range = getRange(statsArr);
  let average = getAverage(statsArr);
  let median = getMedian(statsArr);

  return `Range: ${formatTime(range)} Average: ${formatTime(
    average
  )} Median: ${formatTime(median)}`;
}

function getRange(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

function getAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function getMedian(arr) {
  arr.sort((a, b) => a - b);

  //arr = [0,1,2,3];
  //arr = [0,1,2];
  if (arr.length % 2 == 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }
  return arr[Math.floor(arr.length / 2)];
}

function timeToSeconds(arr) {
  return [arr[0] * 3600, arr[1] * 60, arr[2]].reduce((a, b) => a + b, 0);
}

function formatTime(seconds) {
  let result = [];
  result.push(Math.floor(seconds / 3600));
  seconds %= 3600;
  result.push(Math.floor(seconds / 60));
  seconds %= 60;
  result.push(Math.floor(seconds));

  return result
    .map((num) => num.toLocaleString("en-US", { minimumIntegerDigits: 2 }))
    .join("|");
}
