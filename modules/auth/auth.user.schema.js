const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
  nickname: String,
  password: String,
})

const User = model('User', userSchema);

module.exports = User;
