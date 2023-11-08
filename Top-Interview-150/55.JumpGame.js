/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  maxJump = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (i > maxJump) {
      return false;
    }

    if (maxJump < i + nums[i]) {
      maxJump = i + nums[i];
    }

    if (maxJump >= nums.length - 1) {
      return true;
    }
  }

  return true;
};
