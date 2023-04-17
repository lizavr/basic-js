const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
      this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this.generateTable();
      this.isDirect = isDirect;
  }

  generateTable() {
      const arr = [];
      for (let i = 0; i < this.alphabet.length; i++) {
          arr.push([]);
          for (let j = 0; j < this.alphabet.length; j++) {
              arr[i].push(this.alphabet.charAt(j + i < this.alphabet.length ? j + i : j + i - this.alphabet.length));
          }
      }
      this.table = arr;
  }

  encrypt(str, code) {
      if (!str || !code)
      {
          throw new Error('Incorrect arguments!');
      }
      let result = '';
      str = str.toUpperCase();
      code = code.toUpperCase();
      code = this.createCode(str, code);

      for (let i = 0; i < str.length; i++) {
          let index = this.alphabet.indexOf(str[i]);
          if (index === -1) {
              result += str[i];
          }
          else {
              result += this.table[index][this.alphabet.indexOf(code[i])];
          }
      }
      return this.isDirect ? result : result.split('').reverse().join('');

  }
  decrypt(str, code) {
      if (!str || !code)
      {
          throw new Error('Incorrect arguments!');
      }
      let result = '';
      str = str.toUpperCase();
      code = code.toUpperCase();
      code = this.createCode(str, code);

      for (let i = 0; i < str.length; i++) {
          let index = this.alphabet.indexOf(code[i]);
          if (index === -1) {
              result += str[i];
          }
          else {
              result += this.alphabet[this.table[index].indexOf(str[i])];
          }
      }
      return this.isDirect ? result : result.split('').reverse().join('');

  }

  createCode(str, code) {
      while (code.length < str.length) {
          code += code;
      }
      str.split('').forEach((item, index) => {
          if (this.alphabet.indexOf(item) === -1) {
              code = code.substring(0, index) + item + code.substring(index, code.length - 1);
          }
      })
      code = code.substring(0, str.length);
      return code;
  }
}

module.exports = {
  VigenereCipheringMachine
};
