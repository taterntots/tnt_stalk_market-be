exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('villagers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('villagers').insert([
        {
          villager_name: 'Tater', island_name: 'Memoria', password: 'Tater',
          villager_name: 'Tots', island_name: 'BaddaBoo', password: 'Tots',
          villager_name: 'Pugsley', island_name: 'PugTown', password: 'Pugsley'
        }
      ]);
    });
};
