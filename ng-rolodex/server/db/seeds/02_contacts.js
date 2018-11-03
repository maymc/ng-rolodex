exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          name: 'Chaz',
          address: '2341 North Shore Place',
          mobile: '808-100-3300',
          work: '808-233-0000',
          home: '808-300-0330',
          email: 'chaz@gmail.com',
          twitter: '@demifire',
          instagram: '@demifire',
          github: '@demifire',
          created_by: 1
        },
        {
          name: 'Romeo',
          address: '4556 Waimea St',
          mobile: '808-100-3301',
          work: '808-200-0331',
          home: '808-333-0001',
          email: 'romeo@gmail.com',
          twitter: '@rcjmedia',
          instagram: '@rcjmedia',
          github: '@rcjmedia',
          created_by: 1
        },
        {
          name: 'Abby',
          address: '4563 Diamond Head Rd',
          mobile: '808-133-0332',
          work: '808-233-0002',
          home: '808-300-0033',
          email: 'Abby@gmail.com',
          twitter: '@abbyzhang',
          instagram: '@abbyzhang',
          github: '@abbyzhang',
          created_by: 1
        },
        {
          name: 'Nick',
          address: '7890 Kailua Rd',
          mobile: '808-160-0065',
          work: '808-200-0005',
          home: '808-300-0065',
          email: 'Nick@gmail.com',
          twitter: '@ngambino',
          instagram: '@ngambino',
          github: '@ngambino',
          created_by: 1
        },
        {
          name: 'Wymin',
          address: '3245',
          mobile: '808-100-0005',
          work: '808-200-0205',
          home: '808-360-0005',
          email: 'Wymin@gmail.com',
          twitter: '@wyminc',
          instagram: '@wyminc',
          github: '@wyminc',
          created_by: 1
        },
        {
          name: 'JamieY',
          address: '3245',
          mobile: '808-100-0605',
          work: '808-260-0005',
          home: '808-300-0605',
          email: 'JamieY@gmail.com',
          twitter: '@lyricnrhyme',
          instagram: '@lyricnrhyme',
          github: '@lyricnrhyme',
          created_by: 1
        },
        {
          name: 'Carl',
          address: '3245',
          mobile: '808-18-0005',
          work: '808-280-0085',
          home: '808-800-0005',
          email: 'Carl@gmail.com',
          twitter: '@cwlauger',
          instagram: '@cwlauger',
          github: '@cwlauger',
          created_by: 1
        },
        {
          name: 'Harsh',
          address: '3245',
          mobile: '808-180-0005',
          work: '808-200-0805',
          home: '808-300-0005',
          email: 'Harsh@gmail.com',
          twitter: '@hkotak',
          instagram: '@hkotak',
          github: '@hkotak',
          created_by: 1
        },
        {
          name: 'Sarah',
          address: '3245',
          mobile: '808-100-8005',
          work: '808-280-0005',
          home: '808-800-0005',
          email: 'Sarah@gmail.com',
          twitter: '@syamashige',
          instagram: '@syamashige',
          github: '@syamashige',
          created_by: 1
        },
        {
          name: 'Jason',
          address: '3245',
          mobile: '808-106-0005',
          work: '808-200-0065',
          home: '808-360-0005',
          email: 'Jason@gmail.com',
          twitter: '@jasonhoe',
          instagram: '@jasonhoe',
          github: '@jasonhoe',
          created_by: 1
        },
        {
          name: 'Jeff',
          address: '3245',
          mobile: '808-600-0605',
          work: '808-260-0005',
          home: '808-300-6005',
          email: 'Jeff@gmail.com',
          twitter: '@dleaguer',
          instagram: '@dleaguer',
          github: '@dleaguer',
          created_by: 1
        },
        {
          name: 'May',
          address: '3245',
          mobile: '808-600-0005',
          work: '808-200-0065',
          home: '808-360-0005',
          email: 'May@gmail.com',
          twitter: '@maymc',
          instagram: '@maymc',
          github: '@maymc',
          created_by: 1
        },
        {
          name: 'JamieF',
          address: '3245',
          mobile: '808-180-0085',
          work: '808-200-0005',
          home: '808-800-0805',
          email: 'JamieF@gmail.com',
          twitter: '@JEFrady',
          instagram: '@JEFrady',
          github: '@JEFrady',
          created_by: 1
        },
        {
          name: 'Doug',
          address: '3245',
          mobile: '808-800-0005',
          work: '808-208-0005',
          home: '808-300-0008',
          email: 'Doug@gmail.com',
          twitter: '@ddrcox',
          instagram: '@drcox',
          github: '@drcox',
          created_by: 1
        },

      ]);
    });
};