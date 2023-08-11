// 2634. Filter Elements from Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
  const filtered = [];
  arr.forEach((elem, index) => {
    if (fn(elem, index)) {
      filtered.push(elem);
    }
  });
  return filtered;
};