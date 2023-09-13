// 2626. Array Reduce Transformation
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let res = init;

  for (const i of nums) {
    res = fn(res, i);
  }

  return res;
};
