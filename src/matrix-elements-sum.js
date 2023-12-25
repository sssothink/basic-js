const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let a = [];
  let sum = 0;
  matrix.forEach(element => {
    for (let i = 0; i < element.length; i += 1) {
      if (a.includes(i)) {
        continue;
      } else {
        if (element[i] === 0) {
          a.push(i);
        } else {
          sum += element[i];
        }
      }
    }
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
