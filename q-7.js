// 2727. Is Object Empty

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return !Object.values(obj).length;
};
