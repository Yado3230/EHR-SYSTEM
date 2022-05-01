// const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const labTestSchema = new mongoose.Schema(
  {
    testType: {
      type: String,
      required: [true, 'diagnose type is required'],
      enum: [
        'Biopsy',
        'CT scan',
        'Electrocardiogram',
        'Electroencephalogram',
        'Gastroscopy',
        '...',
      ],
    },
    result: {
      type: String,
      required: [true, 'diagnosis result is required'],
    },
    report: {
      type: String,
      required: [
        true,
        'report is required, write some repost on the diagnosis test',
      ],
    },
    labTechnician: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'doctor field is required'],
      ref: 'Staff',
    },
    patient: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'patient field is required'],
      ref: 'Patient',
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
const LabTest = mongoose.model('LabTest', labTestSchema);
module.exports = LabTest;
