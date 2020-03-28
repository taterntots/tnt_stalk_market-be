const db = require('../data/dbConfig');

module.exports = {
  findTurnips,
  findTurnipPriceById,
  addTurnipPrice
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

// FIND TURNIP PRICE BY ID
// function findTurnipPriceById(turnId) {
//   return db('turnips as t')
//   .select(
//     't.id as turnip_id',
//     'v.villager_name',
//     'v.island_name',
//     't.morning_price',
//     't.afternoon_price'
//   )
//     .join('villagers as v', 'v.id', 't.villager_id')
//     .where('t.id', turnId)
//     .first();
// }

function findTurnipPriceById(id) {
  return db('turnips')
    .where({ id }, turnId)
    .first();
}

// ADD A TURNIP PRICE
function addTurnipPrice(newTurnipPrice) {
  return db('turnips')
    .insert(newTurnipPrice, 'id')
    .then(([id]) => {
      return findTurnipPriceById(id);
    });
}