/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxIndex = 0;
  let total = 0;
  let min = height[0];

  for (let i = 0; i < height.length; i++) {
    if (height[i] > total) {
      total = height[i];
      maxIndex = i;
    }
  }

  total = 0;

  for (let i = 1; i <= maxIndex; i++) {
    if (height[i] >= min) {
      min = height[i];
    }
    if (height[i] < min) {
      total += min - height[i];
    }
  }
  min = height[height.length - 1];
  for (let i = height.length - 2; i >= maxIndex; i--) {
    if (height[i] >= min) {
      min = height[i];
    }
    if (height[i] < min) {
      total += min - height[i];
    }
  }
  return total;
};
