const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = Schema({
  name: String,
  email: String,
  phone:String,
  message:String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', contactSchema);
