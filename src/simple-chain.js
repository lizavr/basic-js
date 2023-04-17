const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
class ChainMaker {
  constructor() {
    this.arr = [];
  }
  getLength() {
    return this.arr.length;
  }
  addLink(value) {
    this.arr.push(value !== undefined ? value : "");
    return this;
  }
  removeLink(position) {
    if (!+position || position <= 0 || position > this.getLength()) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  }
  reverseChain() {
    this.arr.reverse();
    return this;
  }
  finishChain() {
    const res = this.arr.map((item) => `( ${item} )`).join("~~");
    this.arr = [];
    return res;
  }
}

const chainMaker = new ChainMaker();
module.exports = {
  chainMaker,
};
