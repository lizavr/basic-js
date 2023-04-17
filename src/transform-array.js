const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const res = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (arr.length > i + 1) {
        i++;
        res.push(undefined);
      }
      continue;
    }
    if (arr[i] === "--discard-prev") {
      if (res.length) {
        res.pop();
      }
      continue;
    }
    if (arr[i] === "--double-next") {
      if (arr.length > i + 1) {
        res.push(arr[i + 1]);
      }
      continue;
    }
    if (arr[i] === "--double-prev") {
      if (res.length) {
        res.push(res[res.length-1]);
      }
      continue;
    }
    res.push(arr[i]);
  }
  return res.filter((item) => item !== undefined);
}

module.exports = {
  transform,
};
