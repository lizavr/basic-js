const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  const arr = [];
  const check = [];
  let arrKey = new Set();
  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let str = '';
      for (let a = 0; a <= j; a++) {
        str += `.${arr[i][a]}`;
      }
      check.push(str);
      arrKey.add(str);
    }
  }
  arrKey = Array.from(arrKey);
  for (let i = 0; i < arrKey.length; i++) {
    res[arrKey[i]] = check.filter((item) => item === arrKey[i]).length;
  }
  return res;
}

module.exports = {
  getDNSStats,
};
