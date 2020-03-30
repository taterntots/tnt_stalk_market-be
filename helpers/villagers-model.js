const db = require('../data/dbConfig.js');

module.exports = {
  findVillagers,
  findVillagersBy,
  findVillagerById,
  addVillager
};

// FIND ALL VILLAGERS
function findVillagers() {
  return db('villagers');
}

// FIND VILLAGER BY A SPECIFIC FILTER (MUST BE A COLUMN IN THE VILLAGERS TABLE AND USE {<ARGUMENT>})
function findVillagersBy(filter) {
  return db('villagers').where(filter);
}

// FIND VILLAGER BY ID, WILL CONTAIN ANY REVIEWS ASSOCIATED WITH THE Villager OR AN EMPTY ARRAY
function findVillagerById(villagerId) {
  return db('villagers as v')
    .where('id', villagerId)
    .select('v.id', 'v.villager_name', 'v.island_name')
    .first();
}

// ADD A Villager TO THE DATABASE

function addVillager(villager) {
  return db('villagers')
    .insert(villager, 'id')
    .then(([id]) => {
      return findVillagerById(id);
    });
}