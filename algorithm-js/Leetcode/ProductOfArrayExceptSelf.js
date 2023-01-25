/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const left = [];
  for (let i = 0; i < nums.length; i++) {
      if (i === 0) left[i] = 1;
      else left[i] = nums[i - 1] * left[i - 1];
  }

  const right = [];
  for (let i = nums.length - 1; i >= 0; i--) {
      if (i === nums.length - 1) right[i] = 1;
      else right[i] = nums[i + 1] * right[i + 1];
  }

  const answer = [];
  for (let i = 0; i < nums.length; i++) {
      answer[i] = left[i] * right[i]
  }

  return answer;
};