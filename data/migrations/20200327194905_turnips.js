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
    tbl
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
    tbl
      .string('created_date');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('turnips');
};