// const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const staffSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, 'Patient must have a name'],
    },
    role: {
      type: String,
      enum: [
        'patient',
        'receptionist',
        'doctor',
        'admin',
        'superAdmin',
        'pharmacist',
        'laboratorist',
        'nurse',
      ],
      default: 'patient',
    },
    birthday: {
      type: Date,
      required: [true, 'patient must have birth date'],
    },
    age: {
      type: Number,
      min: 0,
    },
    gender: {
      type: String,
      required: [true, 'patient must have gender'],
    },
    maritalStatus: {
      type: String,
      required: [true, 'marital status is required'],
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'user must have a email to login'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'user must have a password to login'],
      minlength: 6,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, 'please confirm your password'],
      validate: {
        // this is only work on create and save
        validator: function (element) {
          return element === this.password;
        },
        message: 'passwords are not the same',
      },
      select: false,
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['point'],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: [Number],
      },
    ],
    registeredAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

patientSchema.pre('save', async function (next) {
  this.password = undefined;
  this.confirmPassword = undefined;
  next();
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
