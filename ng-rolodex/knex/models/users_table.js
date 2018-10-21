const bookshelf = require('./bookshelf.js')

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'id'
})



//can now use JS to touch the Contacts db
module.exports = Users