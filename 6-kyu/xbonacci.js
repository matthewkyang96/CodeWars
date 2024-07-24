function Xbonacci(signature, n) {
  const result = signature.slice(0);
  console.log(n);
  const signatureLength = signature.length;
  while (result.length < n) {
    result.push(
      result.slice(-signatureLength).reduce((accum, curr) => accum + curr, 0)
    );
  }

  return result.slice(0, n);
}
