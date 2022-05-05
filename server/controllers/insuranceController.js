const Insurance = require('../models/insuranceModel');

exports.getAllInsurances = async (req, res) => {
  try {
    const insurances = await Insurance.find();
    res.status(200).json({
      status: 'success',
      data: {
        insurances,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        insurance,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        insurance,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
