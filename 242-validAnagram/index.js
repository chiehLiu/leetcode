/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }

  const charCount = {};

  for (char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  // substract the charCount
  for (char of t) {
      if (!charCount[char]) {
          return false;
      }

      charCount[char] -- ;
  }

  isCharCountResultZero = Object.values(charCount).every(count => count === 0);

  return isCharCountResultZero;
};