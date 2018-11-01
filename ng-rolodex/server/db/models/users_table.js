const bookshelf = require('./bookshelf.js')

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'id'
})

module.exports = Users