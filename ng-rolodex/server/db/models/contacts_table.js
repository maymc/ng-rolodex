const bookshelf = require('./bookshelf.js')

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  idAttribute: 'id'
})

module.exports = Contacts