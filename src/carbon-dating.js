const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity == Number) {
    t = Math.round((Math.log(15/sampleActivity))/(0.693/5730));
    return t;
  } else if (sampleActivity>=15){
    return false;
  } else if (sampleActivity <= 0){
    return false;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};

console.log(Number("sreen"));
console.log(dateSample(25));
console.log(dateSample("25"));