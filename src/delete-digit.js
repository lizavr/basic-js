const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const numberString = n.toString();
  for (let i = 0; i < numberString.length; i++) {
    arr.push(numberString.replace(numberString[i], ""));
  }
  arr.sort((a, b) => b - a);
  res = arr[0];
  return +res;
}

module.exports = {
  deleteDigit,
};
