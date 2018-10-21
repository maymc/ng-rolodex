const bookshelf = require('./bookshelf.js')

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  idAttribute: 'id'
})



//can now use JS to touch the Contacts db
module.exports = Contacts