
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'MickeyMouse',
          name: 'Mickey',
          email: 'mickeymouse@disney.com',
          address: '1111 Disneyland Ave'
        },
        {
          username: 'MinnieMouse',
          name: 'Minnie',
          email: 'minniemouse@disney.com',
          address: '2222 Castle St.'
        },
        {
          username: 'DonaldDuck',
          name: 'Donald',
          email: 'donaldduck@disney.com',
          address: '3333 Quackers Place'
        },

      ]);
    });
};
