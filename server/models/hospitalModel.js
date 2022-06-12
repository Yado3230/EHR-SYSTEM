// const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: [true, 'hospital must have a name'],
    },
    contactNumber: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'hospital must have a email to login'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
    hospitalAdmin: Array,
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


const Hospital = mongoose.model('Hospital', hospitalSchema);
module.exports = Hospital;
