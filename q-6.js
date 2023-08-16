// 2723. Add Two Promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  let sum = 0;
  sum = sum + (await promise1.valueOf());
  sum = sum + (await promise2.valueOf());
  return sum.valueOf();
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
