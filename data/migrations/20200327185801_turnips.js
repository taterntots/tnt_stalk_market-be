exports.up = function (knex, Promise) {
  return knex.schema.createTable('turnips', tbl => {
    tbl.increments();
    tbl
      .integer('morning_price')
      .notNullable();
    tbl
      .integer('afternoon_price')
      .notNullable();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('turnips');
};