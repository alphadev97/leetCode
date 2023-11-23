/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let total = [];
  for (let i = 0; i < ratings.length; i++) {
    total[i] = 1;
  }

  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1] && ratings[i] > ratings[i + 1]) {
      total[i] = Math.max(total[i - 1], total[i + 1]) + 1;
    } else if (ratings[i] > ratings[i - 1]) {
      total[i] = total[i - 1] + 1;
    } else if (ratings[i] > ratings[i + 1]) {
      total[i] = total[i + 1] + 1;
    }
  }
  for (let i = ratings.length - 1; i > -1; i--) {
    if (ratings[i] > ratings[i - 1] && ratings[i] > ratings[i + 1]) {
      total[i] = Math.max(total[i - 1], total[i + 1]) + 1;
    } else if (ratings[i] > ratings[i - 1]) {
      total[i] = total[i - 1] + 1;
    } else if (ratings[i] > ratings[i + 1]) {
      total[i] = total[i + 1] + 1;
    }
  }
  if (ratings[0] > ratings[1]) {
    total[0] = total[1] + 1;
  }
  if (ratings[ratings.length - 1] > ratings[ratings.length - 2]) {
    total[ratings.length - 1] = total[ratings.length - 2] + 1;
  }
  let sum = total.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(total);
  return sum;
};
