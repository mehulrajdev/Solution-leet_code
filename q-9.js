//2722. Join Two Arrays by ID

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);
  const result = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    const v1 = arr1[i];
    const v2 = arr2[j];
    if (v1.id < v2.id) {
      result.push(v1);
      i++;
    } else if (v1.id > v2.id) {
      result.push(v2);
      j++;
    } else {
      result.push({ ...v1, ...v2 });
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};
