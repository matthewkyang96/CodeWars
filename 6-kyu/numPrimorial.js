function numPrimorial(n) {
  let primeArray = [2];
  let num = 3;
  while (primeArray.length !== n) {
    if (isPrime(num)) {
      primeArray.push(num);
    }
    num++;
  }

  return primeArray.reduce((a, b) => a * b, 1);
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
