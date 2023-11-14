var RandomizedSet = function () {
  this.RandomizedSet = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.RandomizedSet.includes(val)) {
    return false;
  }

  this.RandomizedSet.push(val);

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.RandomizedSet.includes(val)) {
    return false;
  }

  const valIndex = this.RandomizedSet.indexOf(val);
  this.RandomizedSet.splice(valIndex, 1);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.RandomizedSet.length);

  return this.RandomizedSet[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
