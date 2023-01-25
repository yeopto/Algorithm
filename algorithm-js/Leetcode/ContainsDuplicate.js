/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  if ([...new Set(nums)].length === nums.length) return false;
  return true;
};