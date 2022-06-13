const Hospital = require('../models/hospitalModel');
const User = require('../models/userModel');

exports.getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json({
      status: 'success',
      data: {
        hospitals,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getHospital = async (req, res) => {
  try {
    const email = req.params.email;
    const hospital = await Hospital.findOne({ email: email });
    res.status(200).json({
      status: 'success',
      data: {
        hospital,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    const newUser = await User.create(req.body.hospitalAdmin);
    res.status(201).json({
      status: 'success',
      message: 'Successfully Registered',
      data: {
        hospital,
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
