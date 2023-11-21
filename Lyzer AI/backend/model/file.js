// file.js

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  textContent: String,
  uploadDate: Date
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
