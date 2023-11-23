/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let water = 0;
  let n = height;

  if (height[0] < 1) {
    height.splice(0, 1);
    return;
  }

  for (let i = 0; i < height.length; i++) {
    if (height[i] > height[i - 1]) {
      water++;
    }
  }

  return water;
};
