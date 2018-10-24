
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          name: '',
          address: '',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
        },

        {
          name: '',
          address: '',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
        },

        {
          name: '',
          address: '',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
        },

        {
          name: '',
          address: '',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
        },

        {
          name: '',
          address: '',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
        },

      ]);
    });
};
