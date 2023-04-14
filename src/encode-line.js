const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      if (num !== 1) {
        res.push(num);
      }
      res.push(str[i]);
      num = 1;
      break;
    }
    if (str[i] === str[i + 1]) {
      num++;
    } else {
      if (num !== 1) {
        res.push(num);
      }
      res.push(str[i]);
      num = 1;
    }
  }
  return res.join("");
}

module.exports = {
  encodeLine,
};
