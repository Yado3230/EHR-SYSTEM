// const crypto = require('crypto');
// const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');

// const loginSchema = new mongoose.Schema({
//   role: {
//     type: String,
//     enum: [
//       'patient',
//       'receptionist',
//       'doctor',
//       'admin',
//       'superAdmin',
//       'pharmacist',
//       'laboratorist',
//       'nurse',
//     ],
//     default: 'patient',
//   },
//   email: {
//     type: String,
//     required: [true, 'user must have a email to login'],
//     unique: true,
//     lowercase: true,
//     validate: [validator.isEmail, 'please provide a valid email'],
//   },
//   password: {
//     type: String,
//     required: [true, 'user must have a password to login'],
//     minlength: 6,
//     select: false,
//   },
//   confirmPassword: {
//     type: String,
//     required: [true, 'confirm password'],
//     validate: {
//       // this is only work on create and save
//       validator: function (element) {
//         return element === this.password;
//       },
//       message: 'password not match',
//     },
//   },
//   passwordChangedAt: Date,
//   passwordResetToken: String,
//   passwordResetExpires: String,
//   active: {
//     type: Boolean,
//     default: true,
//     select: false,
//   },
// });

// loginSchema.pre('save', async function (next) {
//   // run this function if password actually modified
//   if (!this.isModified('password')) return next;
//   // hash password with cost of 12
//   this.password = await bcrypt.hash(this.password, 12);
//   this.confirmPassword = undefined;
//   next();
// });
// loginSchema.methods.correctPassword = async function (
//   candidatePassword,
//   userPassword
// ) {
//   return await bcrypt.compare(candidatePassword, userPassword);
// };

// loginSchema.pre('save', function (next) {
//   if (!this.isModified('password') || this.isNew) return next();

//   this.passwordChangedAt = Date.now() - 1000;
//   next();
// });

// loginSchema.methods.changesPasswordAfter = function (JWTTimestamp) {
//   if (this.passwordChangedAt) {
//     const changedTimestamp = parseInt(
//       this.passwordChangedAt.getTime() / 1000,
//       10
//     );

//     return JWTTimestamp < changedTimestamp;
//   }
//   return false;
// };

// loginSchema.methods.createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString('hex');
//   this.passwordResetToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');

//   this.passwordResetExpires = Date.now() + 10 * 60 * 100;
//   return resetToken;
// };

// loginSchema.pre(/^find/, function (next) {
//   //this points to the current query
//   //^find means word that starts with find
//   this.find({ active: { $ne: false } });
//   next();
// });

// const User = mongoose.model('User', loginSchema);
// module.exports = User;
