function sumEvenNumbers(input) {
    return input
      .filter(n => n % 2 == 0)
      .reduce((accum,num) => accum + num, 0)
  }