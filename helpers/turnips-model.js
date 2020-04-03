const db = require('../data/dbConfig');

module.exports = {
  findTurnips,
  findTurnipById,
  addTurnip,
  deleteTurnip
};

// FIND ALL TURNIP PRICES
function findTurnips() {
  return db('turnips as t')
    .select(
      't.id as turnip_id',
      'v.id as villager_id',
      'v.villager_name',
      'v.island_name',
      't.morning_price',
      't.afternoon_price',
      't.created_at'
    )
    .join('villagers as v', 'v.id', 't.villager_id')
    .orderBy('t.morning_price', 'desc')
    .orderBy('t.afternoon_price', 'desc');
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

// FIND TURNIP PRICE BY ID
function findTurnipById(turnipId) {
  return db('turnips as t')
    .select(
      't.id as turnip_id',
      't.morning_price',
      't.afternoon_price',
      't.created_at'
    )
    .where('t.id', turnipId)
    .first();
}

// ADD A TURNIP PRICE
function addTurnip(newTurnip) {
  return db('turnips')
    .insert(newTurnip, 'id')
    .then(([id]) => {
      return findTurnipById(id);
    });
}

// DELETE AN EXISTING TURNIP PRICE
function deleteTurnip(id) {
  return db('turnips')
    .where({ id })
    .del();
}