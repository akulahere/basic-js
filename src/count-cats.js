const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
    const catString = '^^';
    let catCounter = 0;
    for (let i = 0; i < cats.length ; i++) {
      for (let j = 0; j < cats[i].length; j++) {
        if (cats[i][j] === catString) {
          catCounter++;
        }
      }
    }
    return catCounter;
};
