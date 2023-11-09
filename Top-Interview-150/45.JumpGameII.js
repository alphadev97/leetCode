/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let maxJump = 0;
  let pMaxJump = nums[0];
  let counter = 1;

  if (nums.length < 2) {
    return 0;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    maxJump = Math.max(maxJump, i + nums[i]);

    if (i >= pMaxJump) {
      pMaxJump = maxJump;
      counter++;
    }
  }
  return counter;
};
