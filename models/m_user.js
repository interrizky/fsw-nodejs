/* Create Schema */

const Mongoose = require('mongoose');

var Schema = new Mongoose.Schema({
  username: { type: String },
  password: { type: String },  
  email: { type: String },
  address: { type: String },
  age: { type: String }
})

const identification = Mongoose.model('user', Schema);

module.exports = identification