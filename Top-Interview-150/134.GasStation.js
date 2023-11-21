/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let tank = 0;
  let gasInStation = gas[0];
  let gasToAnotherStation = cost[0];
  let gasStation = 0;

  for (let i = 0; i < gas.length; i++) {
    for (let n = i; n > -1; n++) {
      if (n > gas.length - 1) {
        n = 0;
      }
      tank += gas[i];
      if (tank < cost[i]) {
        tank = 0;
        gasStation++;
        break;
      }

      if (n === i - 1) {
        if (tank < cost[n]) {
          return -1;
        }
        return i;
      }
    }
  }
};
