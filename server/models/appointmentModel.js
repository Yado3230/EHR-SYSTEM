// const crypto = require('crypto');
const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: String,
      required: [true, 'patient name is required'],
    },
    doctor: {
      type: String,
      required: [true, 'doctor name is required'],
    },
    date: {
      type: Date,
      required: [true, 'date is required'],
    },
    availableSlot: {
      type: String,
      required: [true, 'doctor field is required'],
      ref: 'Staff',
    },
    remarks: {
      type: String,
      required: [true, 'patient field is required'],
    },
    status: {
      type: String,
      required: [true, 'patient field is required'],
    },
    options: {
      type: String,
      required: [true, 'patient field is required'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
