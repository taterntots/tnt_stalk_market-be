exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('turnips')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('turnips').insert([
        {
          turnip_id: 1, villager_id: 1, morning_price: 56, afternoon_price: 145,
          turnip_id: 2, villager_id: 2, morning_price: 98, afternoon_price: 23,
          turnip_id: 3, villager_id: 3, morning_price: 195, afternoon_price: 64
        }
      ]);
    });
};
