const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(parseFloat(sampleActivity)) || sampleActivity == null) {
    return false;
  }
  if (typeof sampleActivity !== 'string'){
    return false;
  }
  if (parseFloat(sampleActivity) <= 0) {
    return false;
  }

  let numSampleActivity = parseFloat(sampleActivity);
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/numSampleActivity) / k;
  return t > 0 ? Math.ceil(t) : false;

};
