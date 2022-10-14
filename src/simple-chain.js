const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr: [],
  getLength() {
    let leng = 0;
    for (let char of this.arr) {
      leng++;
    };
    return leng;
  },
  addLink(value) {
    if (value === '') {
      this.arr.push('');
    } else if (value === null) {
      this.arr.push('null');
    } else if (value === false) {
      this.arr.push('false');
    } else {
      this.arr.push(value);
    };
    return this;
  },
  removeLink(position) {
    for (let i = 0; i<this.arr.length; i++) {
      if (position-1 == i) {
        this.arr.splice(i, 1);
        return this;
      } else if (position>this.arr.length || position <= 0 || typeof(position) !== "number" || Math.round(position) !== position) {
        this.arr = [];
        return console.error("You can't remove incorrect link!");
      } else {}
    };
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join(' )~~( ');
    str = '( ' + str + ' )';
    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
