function calculate(num1, operation, num2) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b ? a / b : null),
  };

  return operators[operation] ? operators[operation](num1, num2) : null;
}
