const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: [
      'patient',
      'receptionist',
      'doctor',
      'admin',
      'superAdmin',
      'pharmacist',
      'accountant',
      'laboratorist',
      'nurse',
    ],
    default: 'patient',
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
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  //only run this function if password was actually modified
  if (!this.isModified('password')) return next();
  //hash password
  this.password = await bcrypt.hash(this.password, 12);
  //delete confirmPassword from database
  this.confirmPassword = undefined;
  next();
});
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  //false if password was not changed
  return false;
};
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
