const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  first: String,
  last: String,
  twitter: String,
  avatar: String,
  notes: String,
  createdAt: Date,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;