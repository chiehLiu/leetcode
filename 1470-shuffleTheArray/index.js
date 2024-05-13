/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    const ans = [];
    let i = 0;

    for (let j = n; j < 2 * n; j++) {
        // ans.push(nums[i]);
        // i++;
        // ans.push(nums[j]);

        ans[i] = nums[i];
        i++;
        ans[i+1] = nums[j];
    }

    return ans;
};