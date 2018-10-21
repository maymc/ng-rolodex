
exports.up = function (knex, Promise) {
  return knex.schema.createTable('contacts', function (table) {
    table.increments();
    table.string('created_by').notNullable().references('user_id').inTable('users');

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contacts');
}