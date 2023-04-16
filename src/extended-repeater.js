const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strAddition = [];
  let res = [];
  if (options.addition === null) {
    options.addition = "null";
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    strAddition.push(options.addition);
  }
  strAddition = strAddition.join(options.additionSeparator);
  for (let i = 0; i < options.repeatTimes; i++) {
    res.push(str + strAddition);
  }
  return res.join(options.separator);
}

module.exports = {
  repeater,
};
