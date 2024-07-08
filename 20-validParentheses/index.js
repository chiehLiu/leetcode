/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  if (s.length < 2) {return false}


  const stack = [];

  const map = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (let i = 0; i < s.length; i++ ) {
      if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
          stack.push(s[i]);
      } else {
          const lastOpeningChar = stack.pop();

          if (lastOpeningChar !== map[s[i]]) {
              return false;
          }
      }
  }

  if (stack.length === 0) {
      return true
  } else {
      return false;
  }
};