// const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const medicalRecordSchema = new mongoose.Schema({
  symptoms: {
    type: String,
    required: [true, 'symptoms are required'],
  },
  bloodPressure: {
    type: String,
  },
  temprature: {
    type: String,
  },
  surgeries: {
    type: String,
  },
  diagnoses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Diagnose',
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
  },
  labTest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'labTest',
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
module.exports = MedicalRecord;
