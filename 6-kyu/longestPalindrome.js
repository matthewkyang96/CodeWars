function longestPalindrome(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      let subString = s.slice(i, j);
      if (isPalindrome(subString)) {
        count = Math.max(subString.length, count);
      }
    }
  }
  return count;
}

function isPalindrome(s) {
  return s.split("").reverse().join("") == s;
}
