/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let minJump = nums[0];
  let counter = 1;
  let arr = [];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > index + nums[index]) {
      index = Math.max(...arr);
      counter++;
    }

    if (index + nums[index] < i + nums[i]) {
      arr.push(i + nums[i]);
    }

    if (index + nums[index] > nums.length) {
      return counter;
    }
  }
};
