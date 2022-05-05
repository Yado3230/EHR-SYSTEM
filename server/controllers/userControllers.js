// const { promisify } = require('util');
// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
// const User = require('../models/loginModel');
// const sendEmail = require('../utils/email');
// const res = require('express/lib/response');

// const signToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE_IN,
//   });
// };

// const filterObj = (obj, ...allowedFields) => {
//   const newObj = {};
//   Object.keys(obj).forEach((element) => {
//     if (allowedFields.includes(element)) newObj[element] = obj[element];
//   });
//   return newObj;
// };

// const createSendToken = (user, statusCode, res) => {
//   const token = signToken(user._id);
//   res.status(statusCode).json({
//     message: 'success',
//     role: user.role,
//     token,
//   });
// };

// exports.signin = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email }).select('+password');
//     if (!user || !(await user.correctPassword(password, user.password))) {
//       return res.status(401).json({ message: 'Incorrect email or password' });
//     }
//     createSendToken(user, 200, res);
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };
// exports.signup = async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     createSendToken(user, 201, res);
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

// exports.protect = async (req, res, next) => {
//   //getting token and check of it exist
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     token = req.headers.authorization.split(' ')[1];
//   }
//   if (!token) {
//     return res.status(401).json({
//       message: 'you are not logged in please login before any access',
//     });
//   }

//   //verification token
//   const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

//   //check if user still exists
//   const currentUser = await User.findById(decoded.id);
//   if (!currentUser) {
//     return res.status(404).json({ message: 'token does not longer exist' });
//   }
//   //check if user changed password after the toked was issued
//   if (currentUser.changesPasswordAfter(decoded.iat)) {
//     return res
//       .status(401)
//       .json({ message: 'user changed password! please login again' });
//   }
//   //grant access to protected route
//   req.user = currentUser;
//   next();
// };

// exports.restrictTo = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res
//         .status(403)
//         .json({ message: 'You do not have permission to perform this action' });
//     }
//     next();
//   };
// };

// exports.forgotPassword = async (req, res, next) => {
//   try {
//     //get user based on posted email
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res
//         .status(404)
//         .json({ message: 'There is no user this with email address' });
//     }
//     //generate random reset token
//     const resetToken = user.createPasswordResetToken();
//     console.log('this is from resetToken', resetToken);
//     await user.save({ validateBeforeSave: false });
//     //send it to users email
//     const resetURL = `${req.protocol}://${req.get(
//       'host'
//     )}/api/auth/reserPassword/${resetToken}`;

//     const message = `Forgor your Password? Submit request with your new password and confirm password to: ${resetURL}.`;
//     try {
//       await sendEmail({
//         email: user.email,
//         subject: 'Your password reset token is valid for 10 min',
//         message,
//       });
//       res.status(200).json({
//         status: 'success',
//         message: 'Token sent to mail',
//       });
//     } catch (err) {
//       user.passwordResetToken = undefined;
//       user.passwordResetExpires = undefined;
//       await user.save({ validateBeforeSave: false });

//       return res.status(500).json({
//         message: 'There was an error sending the email. Try again later',
//       });
//     }
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
//   next();
// };
// exports.resetPassword = async (req, res, next) => {
//   //get user based on the token
//   const heashedToken = crypto
//     .createHash('sha256')
//     .update(req.params.token)
//     .digest('hex');

//   const user = await User.findOne({
//     passwordResetToken: heashedToken,
//     passwordResetExpires: { $gt: Date.now() },
//   });
//   //if token has not expired and there is user set the new password
//   if (!user) {
//     return res.status(400).json({ message: 'Token is invalid or expired' });
//   }
//   user.password = req.body.password;
//   user.confirmPassword = req.body.confirmPassword;
//   user.passwordResetToken = undefined;
//   user.passwordResetExpires = undefined;
//   await user.save();

//   //updade changePasswordAt property for the user
//   //log the user in send jwt's
//   createSendToken(user, 200, res);
//   next();
// };

// exports.updatePassword = async (req, res, next) => {
//   // get user from the collection
//   const user = await User.findById(req.user.id).select('+password');
//   // check if posted current password is correct
//   if (!user.correctPassword(req.body.currentPassword, user.password)) {
//     return res.status(401).json({ message: 'your current password is wrong' });
//   }
//   //if so, update password
//   user.password = req.body.password;
//   user.confirmPassword = req.body.confirmPassword;
//   await user.save();
//   //log user in, send JWT
//   createSendToken(user, 200, res);
//   next();
// };

// exports.updateMe = async (req, res, next) => {
//   //create error if user post password data
//   if (req.body.password || req.body.confirmPassword) {
//     return res.status(400).json({
//       message:
//         'this route is not for password update please use update my password option',
//     });
//   }
//   //update user documents
//   const filteredBody = filterObj(req.body, 'email');
//   const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({
//     status: 'success',
//     data: {
//       user: updatedUser,
//     },
//   });
//   next();
// };
// exports.deleteMe = async (req, res, next) => {
//   await User.findByIdAndUpdate(req.user.id, { active: false });
//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// };
