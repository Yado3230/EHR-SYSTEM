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
    type: mongoose.Schema.ObjectId,
    ref: 'Diagnose',
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: 'Patient',
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
medicalRecordSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'patient',
    select: 'name bloodGroup birthday age gender phone email address',
  }).populate({
    path: 'doctor',
    select: 'name phone email address',
  });
  next();
});
// medicalRecordSchema.pre(/^aggregate/, function (next) {
//   this.populate({
//     path: 'patient',
//     select: 'name bloodGroup birthday age gender phone email address',
//   }).populate({
//     path: 'doctor',
//     select: 'name phone email address',
//   });
//   next();
// });

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
module.exports = MedicalRecord;
