exports.up = function (knex, Promise) {
  return knex.schema.createTable('turnips', tbl => {
    tbl.increments();
    tbl
      .integer('morning_price');
    tbl
      .integer('afternoon_price');
    tbl
      .integer('villager_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('villagers')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('turnips');
};