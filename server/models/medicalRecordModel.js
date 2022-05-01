// const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const medicalRecordSchema = new mongoose.Schema({
  symptom: {
    type: String,
    required: [true, 'symptoms are required'],
  },
  bloodPressure: {
    type: String,
  },
  Temprature: {
    type: String,
  },
  surgeries: {
    type: String,
  },
  diagnoses: {
    type: mongoose.Schema.ObjectId,
    ref: 'Diagnose',
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: 'Parient',
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Staff',
  },
  labTest: {
    type: mongoose.Schema.ObjectId,
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
