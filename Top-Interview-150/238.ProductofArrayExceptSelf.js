/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = [];
  let index = 0;
  let value = 1;

  for (let i = 0; i < nums.length; i++) {
    value = value * nums[i - index[i]];
    answer.push(value);
    index++;
  }

  return answer;
};
