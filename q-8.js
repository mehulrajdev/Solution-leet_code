// 2724. Sort By

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = (arr, fn) => arr.sort((a, b) => fn(a) - fn(b));
