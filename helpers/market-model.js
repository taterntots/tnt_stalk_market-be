const db = require('../data/dbConfig');

module.exports = {
  findTurnips
};

// FIND ALL TURNIPS
function findTurnips() {
  return db('turnips as t')
  .select(
    't.id as turnip_id',
    'v.villager_name',
    'v.island_name',
    't.morning_price',
    't.afternoon_price'
  )
    .join('villagers as v', 'v.id', 't.villager_id');
}