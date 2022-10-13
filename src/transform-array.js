const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
   console.error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = Array.from(arr)
  for (let i = 0; i<newArr.length; i++) {
    if (newArr[i] == '--double-next') {
        newArr[i] = newArr[i+1]
    } else if (newArr[i] == '--double-prev') {
        newArr[i] = newArr[i-1]    
    } else if (newArr[i] == '--discard-next') {
        newArr.splice(i, 2);
    } else if (newArr[i] == '--discard-prev') {
        newArr.splice(i-1, 2);
    } else { 
      newArr
    }


    if (!Number.isInteger(newArr[i])) {
        newArr.splice(i, 1)
    } else {}
  }
  return newArr;

}

module.exports = {
  transform
};
