// Source: leetcode

const removeDuplicates = function (nums) {

  // 首先把第一個數字做為沒有重複的第一個值
  let i = 0;
  // loop through the array
  for (let j = 1; j < nums.length; j++) {

    // 如果當前的數字不等於第一個數字
    if (nums[j] != nums[i]) {

      i++;
      // 把遇到的這個不重複的值帶入到第一個數字的後面，後面以此類推
      nums[i] = nums[j];
    }
  }

  return i + 1;
};