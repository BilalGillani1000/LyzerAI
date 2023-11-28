const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  wordCount:Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;