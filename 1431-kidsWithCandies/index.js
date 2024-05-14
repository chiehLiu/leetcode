/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    
  let biggestNum = 0;

  for (let i = 0; i < candies.length; i ++) {
      if (candies[i] > biggestNum || candies[i] === biggestNum) {
          biggestNum = candies[i];
      }
  }

  const res = [];

  for (let i = 0; i < candies.length; i++) {
      if (candies[i] + extraCandies >= biggestNum) {
          res[i] = (true);
      } else {
          res[i] = (false);
      }
  }

  return res;
};