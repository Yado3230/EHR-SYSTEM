const Staff = require('../models/staffModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.getAllStaffs = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'limit', 'fields', 'age'];
    excludedFields.forEach((el) => delete queryObj[el]);
    const staffs = await Staff.find(queryObj);
    res.status(200).json({
      status: 'success',
      data: {
        staffs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createStaff = async (req, res, next) => {
  try {
    const staff = await Staff.create(req.body);
    const newUser = await User.create(req.body);
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(200).json({
      status: 'success',
      token,
      data: {
        staff,
      },
      userdata: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getStaff = async (req, res, next) => {
  try {
    const staff = await Staff.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        staff,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteStaff = async (req, res, next) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: {
        staff,
      },
    });
    next();
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
