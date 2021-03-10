const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const result = members.filter(n => typeof n === typeof 'string').map(n => n.trim()).map(n => n[0].toUpperCase()).sort().join('');
  if (result.length === 0) {
    return false;
  };
  return result;
}
