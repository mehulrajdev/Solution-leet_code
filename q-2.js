// 2704. To Be Or Not To Be
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (expectedValue) => {
      if (val === expectedValue) return true;
      throw new Error("Not Equal");
    },
    notToBe: (notExpectedValue) => {
      if (val !== notExpectedValue) return true;
      throw new Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
