const Insurance = require('../models/insuranceModel');

exports.getAllInsurance = async (req, res) => {
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
