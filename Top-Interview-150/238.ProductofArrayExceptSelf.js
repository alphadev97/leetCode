/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = [];
  let left = [];
  let right = [];
  left[0] = 1;
  right[nums.length - 1] = 1;
  let total = 1;

  for (let i = 1; i < nums.length; i++) {
    total *= nums[i - 1];
    left[i] = total;
  }

  total = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    total *= nums[i + 1];
    right[i] = total;
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
};
