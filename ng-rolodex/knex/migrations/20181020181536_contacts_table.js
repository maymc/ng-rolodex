
exports.up = function (knex, Promise) {
  return knex.schema.createTable('contacts', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('address').notNullable();
    table.string('mobile').notNullable();
    table.string('work').notNullable();
    table.string('home').notNullable();
    table.string('email').notNullable();
    table.string('twitter').notNullable();
    table.string('instagram').notNullable();
    table.string('github').notNullable();

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contacts');
}