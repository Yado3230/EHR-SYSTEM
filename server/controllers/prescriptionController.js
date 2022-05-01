const Prescription = require('../models/prescriptionModel');

exports.createPrescription = async (req, res) => {
  try {
    const presctiption = await Prescription.create(req.body);
    res.status(200).json({
      status: 'success',
      presctiption,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllPrescriptions = async (req, res) => {
  try {
    const presctiptions = await Prescription.find();
    res.status(200).json({
      status: 'success',
      presctiptions,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
