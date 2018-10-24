
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          username: '',
          name: '',
          email: '',
          address: '',
        },

        {
          username: '',
          name: '',
          email: '',
          address: '',
        },

        {
          username: '',
          name: '',
          email: '',
          address: '',
        },

        {
          username: '',
          name: '',
          email: '',
          address: '',
        },

      ]);
    });
};
