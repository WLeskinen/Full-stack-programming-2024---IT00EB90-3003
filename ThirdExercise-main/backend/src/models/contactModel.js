const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  first: String,
  last: String,
  twitter: String,
  avatar: String,
  notes: String,
  favorite: { type: Boolean, default: false }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;