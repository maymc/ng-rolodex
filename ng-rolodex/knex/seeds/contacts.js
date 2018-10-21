
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          name: 'Bob',
          address: '2341 North Shore Place',
          mobile: '808-100-0000',
          work: '808-200-0000',
          home: '808-300-0000',
          email: 'bob@gmail.com',
          twitter: '@bobbb',
          instagram: '@bobbb',
          github: '@bobbb'
        },
        {
          name: 'Bill',
          address: '4556 Waimea St',
          mobile: '808-100-0001',
          work: '808-200-0001',
          home: '808-300-0001',
          email: 'bill@gmail.com',
          twitter: '@billl',
          instagram: '@billl',
          github: '@billl'
        },
        {
          name: 'Sally',
          address: '4563 Diamond Head Rd',
          mobile: '808-100-0002',
          work: '808-200-0002',
          home: '808-300-0002',
          email: 'sally@gmail.com',
          twitter: '@sallyyy',
          instagram: '@sallyyy',
          github: '@sallyyy'
        },
        {
          name: 'Paul',
          address: '7890 Kailua Rd',
          mobile: '808-100-0005',
          work: '808-200-0005',
          home: '808-300-0005',
          email: 'Paul@gmail.com',
          twitter: '@paul',
          instagram: '@paul',
          github: '@paul'
        },
        {
          name: 'Kacie',
          address: '3245',
          mobile: '808-100-0005',
          work: '808-200-0005',
          home: '808-300-0005',
          email: 'kacie@gmail.com',
          twitter: '@kacieee',
          instagram: '@kacieee',
          github: '@kacieee'
        },

      ]);
    });
};
