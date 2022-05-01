const Staff = require('../models/staffModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.getAllStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find();
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
exports.createStaff = async (req, res) => {
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
