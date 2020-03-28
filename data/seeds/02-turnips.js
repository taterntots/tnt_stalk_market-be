exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('turnips')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('turnips').insert([
        {
          villager_id: 1, island_id: 1, morning_price: 56, afternoon_price: 145
        }
      ]);
    });
};
