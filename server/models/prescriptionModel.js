const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  medicineName: {
    type: String,
  },
  Strength: {
    type: String,
  },
  dose: {
    type: String,
  },
  duration: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  patient: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Patient',
    },
  ],
  doctor: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Staff',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Patient = mongoose.model('Prescription', prescriptionSchema);
module.exports = Patient;
