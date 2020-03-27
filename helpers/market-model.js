const db = require('../data/dbConfig');

module.exports = {
  findTurnips
};

// FIND ALL TURNIPS
function findTurnips() {
  return db();
}