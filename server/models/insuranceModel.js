const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },
  cardNumber: {
    type: String,
  },
  policyNumber: {
    type: String,
  },
  expireDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Insurance = mongoose.model('Insurance', insuranceSchema);
module.exports = Insurance;
