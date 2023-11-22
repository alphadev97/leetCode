/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let total = ratings;
  let candies = 0;
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] === total[i]) {
      total[i]++;
      candies++;
    }
    if (ratings[i] > ratings[i - 1] && ratings[i] > ratings[i + 1]) {
      candies++;
    }
    if (i === ratings.length - 1 && ratings[i] > ratings[i - 1]) {
      candies++;
    }
    if (i === 0 && ratings[i] > ratings[i + 1]) {
      candies++;
    }
  }
  return candies;
};
