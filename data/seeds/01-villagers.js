exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('villagers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('villagers').insert([
        { id: 1, villager_name: 'Tater', island_name: 'Memoria', password: 'Tater' },
        { id: 2, villager_name: 'Tots', island_name: 'BaddaBoo', password: 'Tots' },
        { id: 3, villager_name: 'Pugsley', island_name: 'PugTown', password: 'Pugsley' },
      ]);
    });
};
