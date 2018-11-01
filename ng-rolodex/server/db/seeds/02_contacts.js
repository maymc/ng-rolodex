exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          name: 'Bob',
          address: '2341 North Shore Place',
          mobile: '808-100-0000',
          work: '808-200-0000',
          home: '808-300-0000',
          email: 'bob@gmail.com',
          twitter: '@bobbb',
          instagram: '@bobbb',
          github: '@bobbb',
          created_by: 1
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
          github: '@billl',
          created_by: 2
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
          github: '@sallyyy',
          created_by: 3
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
          github: '@paul',
          created_by: 1
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
          github: '@kacieee',
          created_by: 2
        },

      ]);
    });
};