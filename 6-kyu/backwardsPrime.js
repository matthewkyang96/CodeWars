const isPrime = (num) => {
  let max = Math.sqrt(num);
  for (let i = 2; i <= max; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isReversePrime = (num) => {
  let reverseNum = +num.toString().split("").reverse().join("");
  if (num !== reverseNum) return isPrime(reverseNum);
  else return false;
};

const backwardsPrime = (start, stop) => {
  let result = [];
  for (let num = start; num <= stop; num++) {
    if (num % 2 !== 0) {
      if (isPrime(num) && isReversePrime(num)) result.push(num);
    }
  }
  return result;
};
