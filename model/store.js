const mongoose = require('mongoose');
const schema = mongoose.Schema;

var Store = new schema({
  key: {
    type: String,
  },
  val: {
    type: String,
  }
})

module.exports.schema = Store;
module.exports = mongoose.model('Store', Store);