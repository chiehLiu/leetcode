/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  if (nums.length < 2) return [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumHashMap = function(nums, target) {
  if (nums.length < 2) return [];

  // Create a hash table to store the difference and the index
  const table = {};

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {

    // Calculate the difference between the target and the current number
    const diff = target - nums[i];

    // If the difference is in the hash table, return the index of the difference and the current index
    if (diff in table) {
      return [table[diff], i];
    } else {
      // Otherwise, store the current number and the index in the hash table
      table[nums[i]] = i
    }
  }
}

console.log(twoSumHashMap([3, 3], 6));