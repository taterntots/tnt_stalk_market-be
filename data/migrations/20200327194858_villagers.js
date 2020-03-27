exports.up = function (knex, Promise) {
  return knex.schema.createTable('villagers', tbl => {
    tbl.increments();
    tbl
      .string('villager_name')
      .notNullable();
    tbl
      .string('island_name')
      .notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('villagers');
};