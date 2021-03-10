const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxLevel = 1;
    arr.map(n => {
      let depth = 1;
      if (Array.isArray(n)) {
        depth += this.calculateDepth(n);
        maxLevel = Math.max(maxLevel, depth);
      };
    });
    return maxLevel;
  }
};
