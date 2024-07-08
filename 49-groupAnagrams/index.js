/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const charCount = {};

  for (let i = 0; i < strs.length; i++) {
      for (char of strs[i]) {
          charCount[char] = (charCount[char] || 0) + 1;
      }
  }
};